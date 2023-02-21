import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

export const InputMessage = () => {
  return (
    <Form.Item
      label="Message:"
      name="message"
      rules={[
        {
          min: 5,
          message: "Pleas input a valid message more than 5 characters",
        },
      ]}
    >
      <TextArea rows={9} />
    </Form.Item>
  );
};
