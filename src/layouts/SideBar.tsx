import Sider from "antd/es/layout/Sider";
import { ButtonWriteMessage } from "../components/ButtonWriteMessage";
import { Logo } from "../components/Logo";
import { SideMenu } from "../components/SideMenu";
import { DrawerMessage } from "../components/DrawerMessage";
import { Divider, Space } from "antd";

export const SideBar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Logo />
      <Divider style={{ backgroundColor: "rgba(255,225,255,0.3)" }} />
      <Space>
        <ButtonWriteMessage />
        <DrawerMessage />
      </Space>
      <SideMenu />
    </Sider>
  );
};
