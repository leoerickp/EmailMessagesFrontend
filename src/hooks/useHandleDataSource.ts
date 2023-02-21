import { DataType } from '../interfaces/data-type.interface';
import { useSelector, useDispatch } from 'react-redux';
import { setDataSource, setLoading, setSelectedRowKeys, setTotal } from "../store/slices/messages/messagesSlice";
import { transformToDataType } from "../helpers/transform-data-type";
import { client } from "../graphql/client-provider";
import { GET_COUNT_MESSAGES, GET_MESSAGES, GET_ONE_MESSAGE } from "../graphql/queries/messages";
import { ValidTray } from "../enums/valid-tray.enum";

export const useHandleDataSource = () => {

    const { dataSource, page, pageSize, selectedRowKeys, total, tray, loading } = useSelector((state: any) => state.dataSourceMessages);

    const dispatch = useDispatch();


    const prepareAtrributes = (data: any) => {
        let messages: DataType[] = [];
        if (data?.emailMessages) {
            data?.emailMessages.forEach((message: any, index: number) => {
                messages.push(transformToDataType(message));
            });
        }
        return messages;
    }

    const reloadMessages = async (tray: ValidTray, limit: number | null, offset: number | null): Promise<DataType[]> => {
        let messages: DataType[] = [];
        try {
            const { data } = await client.query({
                query: GET_MESSAGES,
                variables: {
                    tray,
                    limit,
                    offset,
                },
                fetchPolicy: 'no-cache',
            })
            messages = prepareAtrributes(data);

        } catch (error) {

        }
        return messages
    }

    const reloadTotalMessages = async (tray: ValidTray): Promise<number> => {
        let total = 0;
        try {
            const countMessages = await client.query({
                query: GET_COUNT_MESSAGES,
                variables: {
                    tray
                },
                fetchPolicy: 'no-cache',
            });
            if (countMessages?.data?.countEmailMessages) {
                total = countMessages.data.countEmailMessages;
            }
        } catch (error) {

        }
        return total;
    }

    const reloadMessagesAndTabla = async (
        tray: ValidTray,
        limit: number = pageSize,
        pageAux: number = page
    ) => {
        dispatch(setSelectedRowKeys([]));
        if (tray) {
            dispatch(setLoading(true));
            const messages: DataType[] = await reloadMessages(
                tray,
                limit,
                (pageAux - 1) * limit
            );

            if (messages.length > 0) {
                dispatch(setDataSource(messages));
            } else dispatch(setDataSource([]));
            const total = await reloadTotalMessages(tray);
            dispatch(setTotal(total));
            dispatch(setLoading(false));
        }

    };

    const loadOneMessage = async (id: string) => {
        try {
            const { data } = await client.query({
                query: GET_ONE_MESSAGE,
                variables: {
                    emailMessageId: id
                },
                fetchPolicy: 'no-cache',
            })
            const message = transformToDataType(data.emailMessage);
            return message;
        } catch (error) {

        }
    }

    const changeRowIsRead = (index: number, isRead: boolean): void => {
        dispatch(setDataSource(dataSource.map((record: DataType, i: number) => {
            if (index === i) return { ...dataSource[index], isRead };
            else return record;
        })));
    };
    const changeAllRowIsRead = (isRead: boolean): void => {
        const data = dataSource.map((record: DataType) => { return { ...record } });
        selectedRowKeys.map((index: any) => {
            const record = data.find((d: DataType) => d._id === index);
            if (record) record.isRead = isRead;
        });
        dispatch(setDataSource(data));
    };

    const selectUnselectAll = (checked: boolean): void => {
        if (checked)
            dispatch(setSelectedRowKeys(dataSource.map((record: DataType) => record.key)));
        else dispatch(setSelectedRowKeys([]));
    };

    return {
        changeAllRowIsRead,
        changeRowIsRead,
        dataSource,
        loading,
        loadOneMessage,
        page,
        pageSize,
        reloadMessagesAndTabla,
        selectedRowKeys,
        setSelectedRowKeys,
        selectUnselectAll,
        setTotal,
        total,
        tray,
    }
}