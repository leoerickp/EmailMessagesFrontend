import { LeftCircleOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

export const ButtomBack = ({ record }: any) => {
  const navigate = useNavigate();
  const backToListMessages = () => {
    navigate(`/email/${record?.tray || ""}`);
  };
  return (
    <Space direction="vertical" align="end" style={{ width: "100%" }}>
      <Button icon={<LeftCircleOutlined />} onClick={backToListMessages}>
        Back
      </Button>
    </Space>
  );
};
