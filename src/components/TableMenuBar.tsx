import { Divider, Space } from "antd";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";
import { ButtonDeleteAll } from "./ButtonDeleteAll";
import { ButtonMakeUnread } from "./ButtonMakeUnread";
import { ButtonReloadData } from "./ButtonReloadData";
import { CheckboxMarkAll } from "./CheckboxMarkAll";
import { ButtonMakeRead } from "./ButtonMakeRead";
import { useSelector } from "react-redux";

const color = "red";
export const TableMenuBar = () => {
  const { selectedRowKeys } = useSelector(
    (state: any) => state.dataSourceMessages
  );

  return (
    <Space size={"middle"}>
      <CheckboxMarkAll colorTooltip={color} />
      <ButtonReloadData colorTooltip={color} />
      {selectedRowKeys.length > 0 && (
        <Space size={"middle"}>
          <Divider type="vertical" />
          <ButtonDeleteAll colorTooltip={color} />
          <ButtonMakeUnread colorTooltip={color} />
          <ButtonMakeRead colorTooltip={color} />
        </Space>
      )}
    </Space>
  );
};
