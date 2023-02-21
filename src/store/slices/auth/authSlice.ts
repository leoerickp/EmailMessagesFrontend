import { createSlice } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { URL_BASE } from "../../../config/config";
import { socketEmailServer, socketOptions } from "../../../socket/socket-connection";

interface IInitialAuthData {
    userData: any,
    isLogged: boolean,
}
export const initialAuthData = (): IInitialAuthData => {
    const itemFromLocalStorage = localStorage.getItem("userData");
    const userData = itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : undefined;
    if (!!userData) {
        socketEmailServer.auth = { token: userData.token }
        socketEmailServer.connect();
    }
    return {
        userData,
        isLogged: !!userData,
    };
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialAuthData(),

    reducers: {
        registerAuth: (state, action) => {
            localStorage.setItem("userData", JSON.stringify(action.payload));
            state.userData = { ...action.payload };
            socketEmailServer.auth = { token: state.userData.token }
            socketEmailServer.connect();
            state.isLogged = true;
        },
        removeAuth: (state) => {
            socketEmailServer.disconnect();
            localStorage.removeItem("userData");
            state = initialAuthData();
        },
        resetAuth: () => initialAuthData(),
    },
});

export const { registerAuth, removeAuth, resetAuth } = authSlice.actions;
