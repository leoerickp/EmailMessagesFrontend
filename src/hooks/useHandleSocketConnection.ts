import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CONNECTION_EVENT, DISCONNECTION_EVENT } from "../constants/socket-events";
import { socketEmailServer } from "../socket/socket-connection";
import { ValidEvent } from '../enums/valid-events';
import { useHandleDataSource } from "./useHandleDataSource";
import { DataType } from '../interfaces/data-type.interface';
import { ValidTray } from '../enums/valid-tray.enum';
import { useHandleSocketEvents } from "./useHandleSocketEvents";


export const useHandleSocketConnection = () => {
    const { createMessage, deleteMessage, payload, setPayload, updateMessage } = useHandleSocketEvents();

    const { userData } = useSelector((state: any) => state.auth);

    const [isSocketConnected, setIsSocketConnected] = useState(
        socketEmailServer.connected
    );

    useEffect(() => {
        const { event }: any = payload;
        switch (event) {
            case ValidEvent.ERROR:
                createMessage(payload);
                break;
            case ValidEvent.CREATE:
                createMessage(payload);
                break;
            case ValidEvent.UPDATE:
                updateMessage(payload);
                break;
            case ValidEvent.REMOVE:
                deleteMessage(payload);
                break;
        }
    }, [payload])


    useEffect(() => {
        socketEmailServer.on(CONNECTION_EVENT, () => {
            setIsSocketConnected(true);
        });

        socketEmailServer.on(DISCONNECTION_EVENT, () => {
            setIsSocketConnected(false);
        });

        socketEmailServer.on(userData.user._id, (payload: any) => {
            setPayload(payload);
        });

        return () => {
            socketEmailServer.off(CONNECTION_EVENT);
            socketEmailServer.off(DISCONNECTION_EVENT);
            socketEmailServer.off(userData.user._id);
        };
    }, []);

    return {
        isSocketConnected
    }
}