import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";

export const ButtonWriteMessage = () => {
  const { setOpenForm, getUsersCallback } = useTableEmailContext();
  const showDrawer = async () => {
    await getUsersCallback();
    setOpenForm(true);
  };
  return (
    <Button
      type="default"
      icon={<EditOutlined />}
      style={{ padding: 10, margin: 10, height: 60 }}
      onClick={showDrawer}
    >
      Write a message
    </Button>
  );
};
