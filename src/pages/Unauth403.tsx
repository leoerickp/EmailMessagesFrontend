import { Result } from "antd";
import { ButtonBackLogin } from "../components/ButtonBackLogin";

export const Unauth403 = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<ButtonBackLogin />}
    />
  );
};
