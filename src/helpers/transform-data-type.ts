import { DataType } from '../interfaces/data-type.interface';
export const transformToDataType = (message: any): DataType => {
    const { __typename, ...restObject } = message;
    return { ...restObject, key: restObject._id };
}