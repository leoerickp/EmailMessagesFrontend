import { Card, Space } from "antd";
import { ButtomBack } from "../components/ButtomBack";
import { useHandleDetailData } from "../hooks/useHandleDetailData";
import { MessageHeader } from "../components/MessageHeader";

export const MessageDetail = () => {
  const { record } = useHandleDetailData();
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <ButtomBack record={record} />
      <Card title={<MessageHeader record={record} />}>
        <div style={{ overflow: "auto", height: "45vh", width: "100%" }}>
          {record?.message}
        </div>
      </Card>
    </Space>
  );
};
