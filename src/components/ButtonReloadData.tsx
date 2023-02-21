import { ReloadOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import { useSelector } from "react-redux";
import { useHandleDataSource } from "../hooks/useHandleDataSource";

export const ButtonReloadData = ({ colorTooltip }: any) => {
  const { tray } = useSelector((state: any) => state.dataSourceMessages);
  const { reloadMessagesAndTabla } = useHandleDataSource();
  return (
    <Tooltip placement="bottom" title={"Reload messages"} color={colorTooltip}>
      <Button
        icon={<ReloadOutlined />}
        onClick={() => reloadMessagesAndTabla(tray)}
      />
    </Tooltip>
  );
};
