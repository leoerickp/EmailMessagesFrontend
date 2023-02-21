import { ValidTray } from '../enums/valid-tray.enum';
import { DataType } from './data-type.interface';
export interface IInitialMessagesState {
    dataSource: DataType[];
    page: number;
    pageSize: number;
    total: number;
    tray: ValidTray | undefined;
    selectedRowKeys: string[];
    loading: boolean;
    /*isLoading: boolean,
    data: any[],
    count: number,
    error: string | null,
    limit: number,
    offset: number,
    backendResult: any,*/
}