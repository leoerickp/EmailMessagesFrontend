import { Form, Input } from "antd";

export const InputPassword = () => {
  return (
    <Form.Item
      label="Password:"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
        {
          min: 6,
          message: "Min lengh required is 6 characters",
        },
      ]}
    >
      <Input type="password" />
    </Form.Item>
  );
};
