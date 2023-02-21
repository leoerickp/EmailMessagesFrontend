import { useMutation } from "@apollo/client";
import { Form } from "antd";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNUP_MUTATION } from "../graphql/mutations/signUp";
import { removeAuth, registerAuth } from "../store/slices/auth/authSlice";
import { useHandleNotificationGraphQL } from "./useHandleNotificationsGraphQL";

export const useHandleSignUp = () => {
    const { graphQLErrorNotification } = useHandleNotificationGraphQL();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signup, { data, loading, error, reset }] =
        useMutation(SIGNUP_MUTATION);
    const [connecting, setConnecting] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(removeAuth());
        setConnecting(loading);
    }, [loading]);

    const signUpSubmit = async (values: any) => {
        const { email, password, fullName } = values;
        try {
            const { data } = await signup({
                variables: {
                    signupInput: {
                        email,
                        password,
                        fullName,
                    },
                },
            });
            dispatch(registerAuth(data.signUp));
            navigate("/email");
        } catch (error) {
            graphQLErrorNotification(error);
            reset();
            dispatch(removeAuth());
        }
    };
    return {
        connecting,
        form,
        signUpSubmit
    }
}