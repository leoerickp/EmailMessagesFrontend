import { TableEmailContext } from "./TableEmailContext";
import { useHandleFormDraw } from "../../hooks/useHandleFormDraw";
import { useHandleDataSource } from "../../hooks/useHandleDataSource";

export const TableEmailProvider = ({ children, isSocketConnected }: any) => {
  const { openForm, setOpenForm, USERS, getUsersCallback } =
    useHandleFormDraw();

  const { changeAllRowIsRead, changeRowIsRead, loading, selectUnselectAll } =
    useHandleDataSource();

  return (
    <TableEmailContext.Provider
      value={{
        changeAllRowIsRead,
        changeRowIsRead,
        getUsersCallback,
        isSocketConnected,
        loading,
        openForm,
        selectUnselectAll,
        setOpenForm,
        USERS,
      }}
    >
      {children}
    </TableEmailContext.Provider>
  );
};
