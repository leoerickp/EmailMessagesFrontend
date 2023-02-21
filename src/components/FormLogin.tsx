import { Divider, Form, Spin } from "antd";
import { InputEmail } from "./InputEmail";
import { InputPassword } from "./InputPassword";
import { useHandleLogin } from "../hooks/useHandleLogin";
import { SignUpBar } from "./SignUpBar";
import { ButtonLogin } from "./ButtonLogin";

export const FormLogin = () => {
  const { connecting, form, authLoginSubmit } = useHandleLogin();
  return (
    <Spin spinning={connecting} delay={500}>
      <Form layout="horizontal" form={form} onFinish={authLoginSubmit}>
        <InputEmail />
        <InputPassword />
        <ButtonLogin />
        <Divider />
        <SignUpBar />
      </Form>
    </Spin>
  );
};
