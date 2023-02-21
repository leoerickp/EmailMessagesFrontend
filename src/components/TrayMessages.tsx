import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHandleDataSource } from "../hooks/useHandleDataSource";
import { setTray } from "../store/slices/messages/messagesSlice";
import { TableMessages } from "./TableMessages";

export const TrayMessages = ({ tray }: any) => {
  const { reloadMessagesAndTabla, pageSize } = useHandleDataSource();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTray(tray));
    reloadMessagesAndTabla(tray, pageSize, 1);
  }, [tray]);
  return <TableMessages />;
};
