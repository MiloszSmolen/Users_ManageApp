import { Layout, theme } from "antd";
import { getUsers } from "../../api/apiCalls";
import { Link } from "react-router-dom";
import { User } from "../../types/types";
import { useEffect, useState } from "react";
import { List } from "antd";

const { Header, Content } = Layout;

const Users = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        Users
      </Header>
      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <List
            style={{ textAlign: "left" }}
            bordered
            dataSource={users}
            renderItem={(user) => (
              <List.Item style={{ fontSize: "20px" }}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </List.Item>
            )}
          />
        </div>
      </Content>
    </>
  );
};

export default Users;
