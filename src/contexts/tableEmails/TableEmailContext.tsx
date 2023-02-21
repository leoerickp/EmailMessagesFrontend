import React, { createContext, useContext } from "react";
import { TableEmailContent } from "../../types/table-email-content";

export const TableEmailContext: React.Context<TableEmailContent> =
  createContext<TableEmailContent>({
    changeAllRowIsRead: () => {},
    changeRowIsRead: (index: number, isRead: boolean): void => {},
    getUsersCallback: () => {},
    isSocketConnected: false,
    loading: false,
    openForm: false,
    selectUnselectAll: (checked: boolean): void => {},
    setOpenForm: () => {},
    USERS: [],
  });

export const useTableEmailContext = () => useContext(TableEmailContext);
