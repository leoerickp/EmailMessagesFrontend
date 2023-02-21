import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { useHandleDeleteOneMessage } from "../hooks/useHandleDeleteOneMessage";
import { ValidTray } from "../enums/valid-tray.enum";

export const ButtonRecycle = ({ data: { record, index } }: any) => {
  const { confirm, confirmLoading, handleOpenChange, open } =
    useHandleDeleteOneMessage({ id: record._id, tray: ValidTray.recycle });

  return (
    <Popconfirm
      placement="topRight"
      title="Are you sure to delete this message?"
      description="Delete message"
      onConfirm={confirm}
      open={open}
      onOpenChange={handleOpenChange}
      okButtonProps={{ loading: confirmLoading }}
      okText="Yes"
      cancelText="No"
    >
      <Button icon={<DeleteOutlined />} type="default" />
    </Popconfirm>
  );
};
