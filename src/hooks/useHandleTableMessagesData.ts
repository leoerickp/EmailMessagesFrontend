import { TableRowSelection } from "antd/es/table/interface";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableProps } from "antd";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";
import { DataType } from "../interfaces/data-type.interface";
import { setPage, setPageSize, setSelectedRowKeys } from "../store/slices/messages/messagesSlice";
import { useHandleDataSource } from "./useHandleDataSource";
import { tableProps } from '../constants/table-props';
import { columns } from "../constants/columns";
import { useHandleUpdateOneMessage } from "./useHandleUpdateMessage";

export const useHandleTableMessagesData = () => {
    const navigate = useNavigate();
    const { dataSource, total, selectedRowKeys, tray } = useSelector((state: any) => state.dataSourceMessages);
    const { reloadMessagesAndTabla, changeRowIsRead } = useHandleDataSource()
    const { updateIsReadField } = useHandleUpdateOneMessage();
    const dispatch = useDispatch();
    const {
        loading,
    } = useTableEmailContext();

    const changePage = async (page: number, pageSize: number): Promise<void | undefined> => {
        dispatch(setPageSize(pageSize));
        dispatch(setPage(page));
        await reloadMessagesAndTabla(tray, pageSize, page);
    };

    const rowSelection: TableRowSelection<DataType> = {
        onSelect: (record, selected, selectedRows) => {
            dispatch(setSelectedRowKeys(selectedRows.map((record: DataType) => record.key)));
        }
    };
    const onClickRow = async (record: DataType, rowIndex: number | undefined) => {
        navigate(record._id);
        if (!record.isRead) {
            await updateIsReadField(record._id, true);
            if (rowIndex) changeRowIsRead(rowIndex, true);
        }
    }

    const dynamicTableProps: TableProps<DataType> = {
        ...tableProps,
        onRow: (record: DataType, rowIndex: number | undefined) => {
            return {
                onClick: () => onClickRow(record, rowIndex),
            };
        },
        pagination:
        {
            position: ["topRight"],
            total,
            onChange: changePage,
            showTotal: (total: number, range: any) =>
                `${range[0]}-${range[1]} of ${total} messages`,
        },
        columns,
        dataSource,
        loading,
        rowSelection:
        {
            ...rowSelection,
            selectedRowKeys,
            checkStrictly: true,
        }
    }

    return {
        dynamicTableProps
    }
}