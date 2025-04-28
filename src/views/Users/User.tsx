import { useParams } from "react-router-dom";
import { getUser, getPosts, getAlbums } from "../../api/apiCalls";
import { Link } from "react-router-dom";
import { Layout, theme } from "antd";
import { useEffect, useState } from "react";
import type { Album, Post, User } from "../../types/types";
import { List } from "antd";

const { Header, Content } = Layout;

const User = () => {
  const { id } = useParams();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      getUser(parsedId).then((data) => {
        setUser(data);
      });
      getPosts().then((data) => {
        setPosts(data.filter((post: Post) => post.userId === parsedId));
      });
      getAlbums().then((data) => {
        setAlbums(data.filter((album: Album) => album.userId === parsedId));
      });
    }
  }, [id]);

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
        {user ? user.name : "User Name"}
      </Header>
      <Content style={{ margin: "16px" }}>
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {user && (
            <>
              <List
                style={{ textAlign: "left" }}
                bordered
                dataSource={[
                  `Username: ${user.username}`,
                  `Email: ${user.email}`,
                  `Phone: ${user.phone}`,
                  `Website: ${user.website}`,
                ]}
                renderItem={(item) => (
                  <List.Item style={{ fontSize: "20px" }}>{item}</List.Item>
                )}
              />
            </>
          )}
        </div>
      </Content>
      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {user && (
            <>
              <h2 style={{ marginBottom: "20px" }}>Posts</h2>

              <List
                style={{ textAlign: "left" }}
                bordered
                dataSource={posts}
                renderItem={(post) => (
                  <List.Item style={{ fontSize: "20px" }}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </List.Item>
                )}
              />

              <h2 style={{ marginBottom: "20px" }}>Albums</h2>

              <List
                style={{ textAlign: "left" }}
                bordered
                dataSource={albums}
                renderItem={(album) => (
                  <List.Item style={{ fontSize: "20px" }}>
                    <Link to={`/albums/${album.id}`}>{album.title}</Link>
                  </List.Item>
                )}
              />
            </>
          )}
        </div>
      </Content>
    </>
  );
};

export default User;
