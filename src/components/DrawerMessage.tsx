import { Drawer } from "antd";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";
import { FormMessage } from "./FormMessage";

export const DrawerMessage = () => {
  const { openForm, setOpenForm } = useTableEmailContext();
  const onClose = () => {
    setOpenForm(false);
  };
  return (
    <Drawer
      title="New message"
      onClose={onClose}
      open={openForm}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <FormMessage />
    </Drawer>
  );
};
