import { Form, Input } from "antd";

export const InputSubject = () => {
  return (
    <Form.Item
      label="Subject:"
      name="subject"
      rules={[
        {
          required: true,
          message: "Please input message subject",
        },
        {
          min: 5,
          message: "Pleas input a valid subject",
        },
      ]}
    >
      <Input placeholder="Subject: Example not response" />
    </Form.Item>
  );
};
