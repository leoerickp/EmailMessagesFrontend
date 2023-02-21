import { ValidTray } from '../enums/valid-tray.enum';
export interface DataType {
    key: string;
    _id: string;
    from: string;
    to: string[];
    cc: string[];
    subject: string;
    message: string;
    isRead: boolean;
    tray: ValidTray;
    createdAt: any;
    //updatedAt: Date;
}