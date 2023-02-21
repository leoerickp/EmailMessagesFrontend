import { SwapLeftOutlined, UserAddOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { Link } from "react-router-dom";

export const SignUpLogin = () => {
  return (
    <Space
      direction="horizontal"
      align="end"
      style={{ width: "100%", justifyContent: "space-between" }}
    >
      <Link to="/login">
        <SwapLeftOutlined /> Login
      </Link>
      <Button type="primary" icon={<UserAddOutlined />} htmlType="submit">
        Sign up
      </Button>
    </Space>
  );
};
