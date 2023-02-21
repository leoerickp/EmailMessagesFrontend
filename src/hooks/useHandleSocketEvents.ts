import { useState } from 'react';
import { ValidTray } from '../enums/valid-tray.enum';
import { DataType } from '../interfaces/data-type.interface';
import { useHandleDataSource } from './useHandleDataSource';
export const useHandleSocketEvents = () => {
    const { changeRowIsRead, dataSource, tray, reloadMessagesAndTabla, page, pageSize } = useHandleDataSource();
    const [payload, setPayload] = useState({});
    const deleteMessage = (payload: any) => {
        const { id } = payload;
        const index = dataSource.findIndex((ds: DataType) => ds._id === id);
        if (index >= 0) {
            reloadMessagesAndTabla(tray, pageSize, page);
        }
    }

    const updateMessage = (payload: any) => {
        const { data } = payload;
        const index = dataSource.findIndex((ds: DataType) => ds._id === data.id);
        if (index >= 0) {
            const { tray: newTray, isRead } = data;
            if (isRead) changeRowIsRead(index, isRead);
            if (newTray) reloadMessagesAndTabla(tray, pageSize, page);
        }
    }
    const createMessage = (payload: any) => {
        if (tray === ValidTray.inbox) {
            reloadMessagesAndTabla(tray, pageSize, page);
        }
    }
    return {
        createMessage,
        deleteMessage,
        payload,
        setPayload,
        updateMessage
    }
}