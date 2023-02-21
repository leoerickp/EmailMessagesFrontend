import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { dataSourceMessagesSlice } from './slices/messages/messagesSlice';
export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        dataSourceMessages: dataSourceMessagesSlice.reducer,
    },
});