import { DeleteOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";

export const ButtonDeleteAll = ({ colorTooltip }: any) => {
  return (
    <Tooltip placement="bottom" title={"Delete messages"} color={colorTooltip}>
      <Button icon={<DeleteOutlined />} />
    </Tooltip>
  );
};
