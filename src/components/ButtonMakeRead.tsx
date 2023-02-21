import { EyeInvisibleOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";

export const ButtonMakeRead = ({ colorTooltip }: any) => {
  const { changeAllRowIsRead } = useTableEmailContext();
  return (
    <Tooltip
      placement="bottom"
      title={"Mark as no read them"}
      color={colorTooltip}
    >
      <Button
        icon={<EyeInvisibleOutlined />}
        onClick={() => changeAllRowIsRead(false)}
      />
    </Tooltip>
  );
};
