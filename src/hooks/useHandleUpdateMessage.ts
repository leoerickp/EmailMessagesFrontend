import { useMutation } from "@apollo/client";
import { UPDATE_MESSAGE_MUTATION } from "../graphql/mutations/updateEmailMessage";
import { useHandleNotificationGraphQL } from "./useHandleNotificationsGraphQL";

export const useHandleUpdateOneMessage = () => {
    const { graphQLErrorNotification } = useHandleNotificationGraphQL();
    const [updateMessage, { data, error, loading, reset }] = useMutation(UPDATE_MESSAGE_MUTATION);
    const updateIsReadField = async (id: string, isRead: boolean) => {
        try {
            const result = await updateMessage({
                variables: {
                    updateEmailMessageInput: {
                        id,
                        isRead
                    }
                },
            });
        } catch (error) {
            graphQLErrorNotification(error);
            reset();
        }
    }
    return {
        updateIsReadField,
        data, error, loading
    }

}