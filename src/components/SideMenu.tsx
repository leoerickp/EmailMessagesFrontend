import { Menu } from "antd";
import { useLocation } from "react-router-dom";
import { items } from "../constants/menu-items";
import { getKey } from "../helpers/get-key";

export const SideMenu = () => {
  const location = useLocation();
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[getKey(location.pathname)]}
      items={items}
    />
  );
};
