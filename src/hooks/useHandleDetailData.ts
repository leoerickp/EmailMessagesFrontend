import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { DataType } from "../interfaces/data-type.interface";
import { useHandleDataSource } from "./useHandleDataSource";

export const useHandleDetailData = () => {
    const { loadOneMessage } = useHandleDataSource()
    const { dataSource } = useSelector((state: any) => state.dataSourceMessages);
    const { id } = useParams();
    const [record, setRecord] = useState<DataType>();
    const updateRecord = async () => {
        if (dataSource.length > 0) {
            setRecord(dataSource[dataSource.findIndex((ds: DataType) => ds._id === id)]);
        } else {
            const record = await loadOneMessage(id as string);
            if (record) setRecord(record)
        }
    }
    useEffect(() => {
        updateRecord();
    }, [id]);
    return { record };
}