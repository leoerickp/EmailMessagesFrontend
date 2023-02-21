import { useMutation } from "@apollo/client";
import { Form } from "antd";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_MUTATION } from "../graphql/mutations/login";
import { removeAuth, registerAuth } from "../store/slices/auth/authSlice";
import { useHandleNotificationGraphQL } from "./useHandleNotificationsGraphQL";

export const useHandleLogin = () => {
    const { graphQLErrorNotification } = useHandleNotificationGraphQL();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const [login, { data, loading, error, reset }] = useMutation(LOGIN_MUTATION);
    const [connecting, setConnecting] = useState(false);

    useEffect(() => {
        dispatch(removeAuth());
        setConnecting(loading);
    }, [loading]);

    const authLoginSubmit = async (values: any) => {
        const { email, password } = values;
        try {
            const { data } = await login({
                variables: {
                    loginInput: {
                        email,
                        password,
                    },
                },
            });
            dispatch(registerAuth(data.login));
            navigate("/email");
        } catch (error) {
            graphQLErrorNotification(error);
            reset();
            dispatch(removeAuth());
        }
    };
    return { authLoginSubmit, connecting, form }
}