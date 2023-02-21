import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Space } from "antd";
import { FormInputsMessage } from "./FormInputsMessage";
import { useHandleCreateOneMessage } from "../hooks/useHandleCreateOneMessage";

export const FormMessage = () => {
  const { sendMessage, form, onClose } = useHandleCreateOneMessage();
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ layout: "vertical" }}
      style={{ maxWidth: 600 }}
      onFinish={sendMessage}
    >
      <FormInputsMessage />
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button icon={<SendOutlined />} type="primary" htmlType="submit">
          Send
        </Button>
      </Space>
    </Form>
  );
};
