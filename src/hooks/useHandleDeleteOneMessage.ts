import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ValidTray } from "../enums/valid-tray.enum";
import { UPDATE_MESSAGE_MUTATION } from "../graphql/mutations/updateEmailMessage";
import { variablesUpdateMessage } from '../interfaces/variablesUpdateMessage.interface';
import { REMOVE_MESSAGE_MUTATION } from '../graphql/mutations/removeEmailMessage';
import { useHandleNotificationGraphQL } from "./useHandleNotificationsGraphQL";
import { useSelector } from "react-redux";
import { useHandleDataSource } from "./useHandleDataSource";

export const useHandleDeleteOneMessage = (variables: variablesUpdateMessage, handleDeleteEvent = (data: any, isRecycle: boolean) => { }) => {
    let noClose = false;
    const { tray } = useSelector((state: any) => state.dataSourceMessages);
    const { graphQLErrorNotification } = useHandleNotificationGraphQL();
    const { reloadMessagesAndTabla } = useHandleDataSource();
    const isRecycle = tray === ValidTray.recycle;
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [updateMessage] = useMutation(UPDATE_MESSAGE_MUTATION);
    const [deleteMessage] = useMutation(REMOVE_MESSAGE_MUTATION);

    const confirm = async () => {
        noClose = true;
        setConfirmLoading(true);
        try {
            let result: any;
            if (!isRecycle) {
                result = await updateMessage({
                    variables: {
                        updateEmailMessageInput: variables
                    },
                });
            }
            else {
                result = await deleteMessage({
                    variables: {
                        removeEmailMessageId: variables.id
                    },
                });
            }
            await reloadMessagesAndTabla(tray);
            handleDeleteEvent(result.data, isRecycle);
            setOpen(false);
            setConfirmLoading(false);
            noClose = false;
        } catch (error) {
            graphQLErrorNotification(error);
        }
    };
    const handleOpenChange = (newOpen: boolean) => {
        if (noClose) return;
        if (!isRecycle) confirm();
        else setOpen(newOpen);
    };
    return {
        confirm,
        handleOpenChange,
        open,
        confirmLoading
    }
}