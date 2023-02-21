import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { emailApiServer } from '../../../api/email-api-server';
import { registerAuth } from './authSlice';

export const login = ({ email, password }: any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const resp = await emailApiServer
            .post(`/auth/login`, {
                email,
                password,
            })
            .then((resp) => {
                dispatch(registerAuth(resp.data));
            });
    };
};
