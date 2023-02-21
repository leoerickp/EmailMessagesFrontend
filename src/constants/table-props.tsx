import { TableProps } from "antd";
import { DataType } from "../interfaces/data-type.interface";

export const tableProps: TableProps<DataType> = {
  expandable: { fixed: true },
  rowSelection: {},
  scroll: { x: true, y: 490 },
  showHeader: false,
  rowClassName: "row-class",
};

export const renderRows = (text: any, record: DataType) =>
  record.isRead ? <span>{text}</span> : <b>{text}</b>;
