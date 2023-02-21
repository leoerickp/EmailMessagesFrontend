import { Form, Spin } from "antd";
import { InputEmail } from "./InputEmail";
import { InputPassword } from "./InputPassword";
import { InputFullName } from "./InputFullName";
import { SignUpLogin } from "./SignUpLogin";
import { useHandleSignUp } from "../hooks/useHandleSugnUp";

export const FormSignUp = () => {
  const { connecting, form, signUpSubmit } = useHandleSignUp();

  return (
    <Spin spinning={connecting} delay={500}>
      <Form
        layout="horizontal"
        form={form}
        initialValues={{ layout: "vertical" }}
        style={{ maxWidth: 350 }}
        onFinish={signUpSubmit}
      >
        <InputFullName />
        <InputEmail />
        <InputPassword />
        <SignUpLogin />
      </Form>
    </Spin>
  );
};
