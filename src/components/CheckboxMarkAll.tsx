import { Tooltip, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";
import { useSelector } from "react-redux";
import { IInitialMessagesState } from "../interfaces/initial-messages-state.interface";

export const CheckboxMarkAll = ({ colorTooltip }: any) => {
  const { dataSource, selectedRowKeys } = useSelector(
    (state: any) => state.dataSourceMessages
  );
  const { selectUnselectAll } = useTableEmailContext();

  const handleOnChange = (e: CheckboxChangeEvent) => {
    selectUnselectAll(e.target.checked);
  };
  return (
    <Tooltip
      placement="bottom"
      title={"Select all messages"}
      color={colorTooltip}
    >
      <Checkbox
        checked={selectedRowKeys.length === dataSource.length}
        disabled={dataSource.length === 0}
        indeterminate={
          selectedRowKeys.length > 0 &&
          selectedRowKeys.length < dataSource.length
        }
        onChange={handleOnChange}
      />
    </Tooltip>
  );
};
