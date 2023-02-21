import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { format, parseISO } from "date-fns";
import { ButtonRecycle } from "../components/ButtonRecycle";
import { ButtonToggleRead } from "../components/ButtonToggleRead";
import { DataType } from "../interfaces/data-type.interface";
import { renderRows } from "./table-props";

export const columns: ColumnsType<DataType> = [
  {
    title: "From",
    dataIndex: "from",
    responsive: ["sm"],
    render: renderRows,
    width: "30%",
  },
  {
    title: "Subject",
    dataIndex: "subject",
    render: renderRows,
    width: "45%",
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    sorter: (a, b) => a.createdAt - b.createdAt,
    responsive: ["sm"],
    width: "25%",
    render: (text, record) =>
      renderRows(format(parseISO(text), "MM-dd-yyyy hh:mm:ss"), record),
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
    render: (text: any, record: DataType, index: number) => (
      <Space size="middle">
        <ButtonRecycle data={{ text, record, index }} />
        <ButtonToggleRead data={{ text, record, index }} />
      </Space>
    ),
  },
];
