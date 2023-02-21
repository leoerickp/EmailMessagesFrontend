import { createSlice } from "@reduxjs/toolkit";
import { IInitialMessagesState } from "../../../interfaces/initial-messages-state.interface";

const initialState: IInitialMessagesState = {
  dataSource: [],
  page: 1,
  pageSize: 10,
  total: 0,
  tray: undefined,
  selectedRowKeys: [],
  loading: false
}

export const dataSourceMessagesSlice = createSlice({
  name: "dataSourceMessages",
  initialState,
  reducers: {
    setDataSource: (state, action) => {
      state.dataSource = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setTray: (state, action) => {
      state.tray = action.payload;
      setPage(1);
    },
    setSelectedRowKeys: (state, action) => {
      state.selectedRowKeys = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const {
  setDataSource,
  setLoading,
  setPage,
  setPageSize,
  setSelectedRowKeys,
  setTray,
  setTotal
} = dataSourceMessagesSlice.actions;
