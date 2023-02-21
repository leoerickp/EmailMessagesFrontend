import { Form, Select } from "antd";
import { useHandleSelectInputData } from "../hooks/useHandleSelectInputData";

export const SelectInput = ({ label, name, required = false }: any) => {
  const { filteredOptions, selectedItems, setSelectedItems } =
    useHandleSelectInputData(name);
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required,
          message: `Please select valid Users in "${label}" field`,
        },
      ]}
    >
      <Select
        mode="multiple"
        placeholder="Select users to send a message"
        value={selectedItems}
        onChange={setSelectedItems}
        style={{ width: "100%" }}
        allowClear
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
    </Form.Item>
  );
};
