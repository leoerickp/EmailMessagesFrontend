import {
  InboxOutlined,
  SendOutlined,
  DeleteOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { SideBarLink } from "../components/SideBarLink";

export const items: MenuProps["items"] = [
  {
    label: <SideBarLink link="inbox" label="Inbox" />,
    key: "inbox",
    icon: <InboxOutlined />,
  },
  {
    label: <SideBarLink link="outbox" label="Outbox" />,
    key: "outbox",
    icon: <SendOutlined />,
  },
  {
    label: <SideBarLink link="recycle" label="Recycle bin" />,
    key: "recycle",
    icon: <DeleteOutlined />,
  },
  {
    label: <SideBarLink link="profile" label="Profile" />,
    key: "profile",
    icon: <ProfileOutlined />,
  },
  { type: "divider", style: { backgroundColor: "rgba(255,225,255,0.3)" } },
  {
    label: <SideBarLink link="/logout" label="Logout" />,
    key: "logout",
    icon: <LogoutOutlined />,
  },
];
