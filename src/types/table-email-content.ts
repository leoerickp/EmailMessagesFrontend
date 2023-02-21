import { DataType } from "../interfaces/data-type.interface";
import { ValidTray } from '../enums/valid-tray.enum';

export type TableEmailContent = {
    changeAllRowIsRead: any;
    changeRowIsRead: any;
    getUsersCallback: any;
    isSocketConnected: boolean;
    loading: boolean;
    openForm: boolean;
    selectUnselectAll: any;
    setOpenForm: any;
    USERS: any[];
};