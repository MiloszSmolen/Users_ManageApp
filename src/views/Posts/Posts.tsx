import { useEffect, useState } from "react";
import { Layout, theme } from "antd";
import { getPosts } from "../../api/apiCalls";
import { Link } from "react-router-dom";
import { Post } from "../../types/types";
import { List } from "antd";

const { Header, Content } = Layout;
const Posts = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
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
        Posts
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
          {posts.length ? (
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
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Content>
    </>
  );
};

export default Posts;
