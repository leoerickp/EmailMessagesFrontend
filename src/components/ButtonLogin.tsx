import { LoginOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

export const ButtonLogin = () => {
  return (
    <Space
      direction="vertical"
      align="end"
      style={{
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <Button type="primary" icon={<LoginOutlined />} htmlType="submit">
        Login
      </Button>
    </Space>
  );
};
