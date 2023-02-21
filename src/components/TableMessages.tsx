import { Space, Table } from "antd";
import { TableMenuBar } from "./TableMenuBar";
import { useHandleTableMessagesData } from "../hooks/useHandleTableMessagesData";

export const TableMessages = () => {
  const { dynamicTableProps } = useHandleTableMessagesData();
  return <Table {...dynamicTableProps} title={() => <TableMenuBar />} />;
};
