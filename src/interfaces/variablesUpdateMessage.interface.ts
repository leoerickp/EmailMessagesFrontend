import { ValidTray } from '../enums/valid-tray.enum';
export interface variablesUpdateMessage {
    id: string;
    isRead?: boolean | null;
    tray?: ValidTray | null;
}