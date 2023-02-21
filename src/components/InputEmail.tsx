import { Form, Input } from "antd";

export const InputEmail = () => {
  return (
    <Form.Item
      label="Email:"
      name="email"
      rules={[
        {
          type: "email",
          message: "The input is not valid E-mail!",
        },
        {
          required: true,
          message: "Please input your E-mail!",
        },
      ]}
    >
      <Input placeholder="To: jhonsmith@example.com" />
    </Form.Item>
  );
};
