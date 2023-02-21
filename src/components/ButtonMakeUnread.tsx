import { EyeOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";

export const ButtonMakeUnread = ({ colorTooltip }: any) => {
  const { changeAllRowIsRead } = useTableEmailContext();

  return (
    <Tooltip
      placement="bottom"
      title={"Mark as read them"}
      color={colorTooltip}
    >
      <Button icon={<EyeOutlined />} onClick={() => changeAllRowIsRead(true)} />
    </Tooltip>
  );
};
