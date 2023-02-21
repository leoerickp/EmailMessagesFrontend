import { Form } from "antd";
import { useState, useEffect } from "react";
import { useTableEmailContext } from "../contexts/tableEmails/TableEmailContext";
const initialItems: string[] = [];
export const useHandleSelectInputData = (name: string) => {
    const { USERS, getUsersCallback } = useTableEmailContext();
    const [selectedItems, setSelectedItems] = useState<string[]>(initialItems);

    const form = Form.useFormInstance();
    useEffect(() => {
        if (!form.getFieldValue(name)) {
            setSelectedItems(initialItems);
        }
    }, [form.getFieldValue(name)]);


    const filteredOptions = USERS.filter((o) => !selectedItems.includes(o));
    return {
        filteredOptions,
        selectedItems,
        setSelectedItems
    }
}