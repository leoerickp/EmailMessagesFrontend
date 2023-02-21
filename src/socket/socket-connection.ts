
import { io } from 'socket.io-client';
import { Access_Control_Allow_Origin, URL_BASE } from '../config/config';
import { getTokenFromLocalStorage } from '../helpers/get-token';

const token = getTokenFromLocalStorage();

export const socketOptions = () => {
    return {
        'extraHeaders': {
            'authentication': token,
            'Access-Control-Allow-Origin': Access_Control_Allow_Origin,
            'Access-Control-Allow-Methods': 'GET,POST'
        },
        autoconnect: false
    }
}
export const socketEmailServer = io(URL_BASE, socketOptions());