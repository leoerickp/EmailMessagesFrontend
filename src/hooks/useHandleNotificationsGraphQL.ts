import { useAppContext } from "../contexts/appcontext/AppContext";

export const useHandleNotificationGraphQL = () => {
    const { errorNotification } = useAppContext();
    const graphQLErrorNotification = (error: any) => {
        const { graphQLErrors }: any = error;
        if (graphQLErrors.length > 0) {
            errorNotification(
                `Login error: ${graphQLErrors[0].extensions.code}`,
                JSON.stringify(graphQLErrors[0].message)
            );
        } else {
            errorNotification(
                `Unknown server error`,
                "It cannot login in this moment. Please try later or contact to the system manager."
            );
        }
    }
    return { graphQLErrorNotification }
}