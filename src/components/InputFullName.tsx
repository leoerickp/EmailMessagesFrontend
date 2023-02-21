import { Form, Input } from "antd";

export const InputFullName = () => {
  return (
    <Form.Item
      label="Full name:"
      name="fullName"
      rules={[
        {
          required: true,
          message: "Please input your Fullname!",
        },
      ]}
    >
      <Input placeholder="Ex: Jhon Smith" />
    </Form.Item>
  );
};
