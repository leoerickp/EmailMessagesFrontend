import { notification } from "antd";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }: any) => {
  const [api, contextHolder] = notification.useNotification();
  const errorNotification = (
    message: React.ReactNode,
    description: React.ReactNode
  ) => {
    api.error({
      message,
      description,
      duration: 3,
      placement: "topRight",
    });
  };
  return (
    <AppContext.Provider
      value={{
        api,
        contextHolder,
        errorNotification,
      }}
    >
      {contextHolder}
      {children}
    </AppContext.Provider>
  );
};
