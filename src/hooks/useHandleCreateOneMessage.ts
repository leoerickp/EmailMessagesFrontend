import { useMutation } from "@apollo/client";
import { Form } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";
import { CREATE_EMAIL_MESSAGE } from "../graphql/mutations/createEmailMessage";
import { useHandleDataSource } from "./useHandleDataSource";
import { useHandleNotificationGraphQL } from "./useHandleNotificationsGraphQL";

export const useHandleCreateOneMessage = () => {
    const { tray } = useSelector((state: any) => state.dataSourceMessages);
    const { graphQLErrorNotification } = useHandleNotificationGraphQL();

    const [createMessage, { data, error, loading, reset }] =
        useMutation(CREATE_EMAIL_MESSAGE);

    const { reloadMessagesAndTabla } = useHandleDataSource();

    const { openForm, setOpenForm } = useTableEmailContext();

    const [form] = Form.useForm();

    const onClose = () => {
        setOpenForm(false);
    };

    useEffect(() => {
        form.resetFields();
    }, [openForm]);

    const sendMessage = async (values: any) => {
        const { to, subject, message, cc } = values;
        try {
            const result = await createMessage({
                variables: {
                    createEmailMessageInput: {
                        to,
                        subject,
                        message,
                        cc,
                    },
                },
            });
            reloadMessagesAndTabla(tray);
            onClose();
        } catch (error) {
            graphQLErrorNotification(error);
        }
    };

    return { sendMessage, form, onClose }
}