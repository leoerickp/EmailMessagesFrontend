import { Space } from "antd";
import { InputMessage } from "./InputMessage";
import { InputSubject } from "./InputSubject";
import { SelectInput } from "./SelectInput";

export const FormInputsMessage = () => {
  return (
    <Space direction="vertical" size={"small"} style={{ display: "flex" }}>
      <SelectInput label="To:" name="to" required={true} />
      <SelectInput label="CC:" name="cc" />
      <InputSubject />
      <InputMessage />
    </Space>
  );
};
