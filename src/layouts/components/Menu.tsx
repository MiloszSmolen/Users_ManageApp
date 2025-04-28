import {
  TeamOutlined,
  FilePptOutlined,
  PictureOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/">Home</Link>, "home", <HomeOutlined />),
  getItem(<Link to="/users">Users</Link>, "users", <TeamOutlined />),
  getItem(<Link to="/posts">Posts</Link>, "posts", <FilePptOutlined />),
  getItem(<Link to="/albums">Albums</Link>, "albums", <PictureOutlined />),
];

const MenuComponent = () => {
  const { pathname } = useLocation();

  const getSelectedKey = () => {
    const selectedKey = items.find((item) =>
      pathname.includes(item?.key as string)
    )?.key;
    return selectedKey ? ([selectedKey] as string[]) : ["home"];
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      selectedKeys={getSelectedKey()}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default MenuComponent;
