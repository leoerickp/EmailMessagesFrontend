import { Card } from "antd";
import { FormSignUp } from "../components/FormSignUp";

export const SignUp = () => {
  return (
    <Card title="Sign up" bordered={false} style={{ width: 350 }}>
      <FormSignUp />
    </Card>
  );
};
