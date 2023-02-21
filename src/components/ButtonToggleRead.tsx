import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState, useEffect } from "react";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";
import { useHandleUpdateOneMessage } from "../hooks/useHandleUpdateMessage";

export const ButtonToggleRead = ({ data: { record, index } }: any) => {
  const { updateIsReadField } = useHandleUpdateOneMessage();
  const { changeRowIsRead } = useTableEmailContext();
  const [isRead, setIsRead] = useState(record.isRead);
  useEffect(() => {
    setIsRead(record.isRead);
  }, [record.isRead]);

  const updateIsReadRow = async () => {
    await updateIsReadField(record._id, !isRead);
    setIsRead(!isRead);
    changeRowIsRead(index, !isRead);
  };
  return (
    <Button
      icon={!isRead ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      onClick={() => updateIsReadRow()}
    />
  );
};
