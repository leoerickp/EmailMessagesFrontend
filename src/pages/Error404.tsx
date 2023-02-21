import { Result } from "antd";
import { ButtonBackLogin } from "../components/ButtonBackLogin";

export const Error404 = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<ButtonBackLogin />}
      />
    </>
  );
};
