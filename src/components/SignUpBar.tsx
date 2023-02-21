import { Space } from "antd";
import { Link } from "react-router-dom";

export const SignUpBar = () => {
  return (
    <Space
      align="start"
      direction="horizontal"
      style={{ width: "100%", justifyContent: "space-between" }}
    >
      <a href="#!">Forgot your password</a>
      <Link to="/signup">Sign up</Link>
    </Space>
  );
};
