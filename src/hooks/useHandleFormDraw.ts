import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USERS } from "../graphql/queries/users";
import { useHandleNotificationGraphQL } from "./useHandleNotificationsGraphQL";

let USERS: any[] = [];
export const useHandleFormDraw = () => {
    const { graphQLErrorNotification } = useHandleNotificationGraphQL();

    const [openForm, setOpenForm] = useState(false);

    const [getUsers] = useLazyQuery(GET_USERS);

    const getUsersCallback = async () => {
        try {
            const { data } = await getUsers({
                fetchPolicy: "no-cache",
            });
            USERS = data.users.map((user: any) => user.email);
        } catch (error) {
            graphQLErrorNotification(error);
        }
    };

    return {
        getUsersCallback,
        openForm,
        setOpenForm,
        USERS
    }
}