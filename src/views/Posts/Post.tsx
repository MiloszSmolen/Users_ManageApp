import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost, getPostComments, getUser } from "../../api/apiCalls";
import { List, Card, Layout, theme } from "antd";
import type { Post, User, Comment } from "../../types/types";

const { Header, Content } = Layout;

const Post = () => {
  const { id } = useParams();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      getPost(parsedId).then((dataPost) => {
        getUser(dataPost.userId).then((dataUser) => {
          setPost(dataPost);
          setUser(dataUser);
        });
      });
      getPostComments(parsedId).then((data) => {
        setComments(data);
      });
    }
  }, [id]);

  if (!id) return null;

  if (!post || !user) return <div>Loading...</div>;

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          textAlign: "center",
          fontSize: "1.5vw",
          marginBottom: "20px",
        }}
      >
        {post ? post.title : "Post Title"}
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
          {post && (
            <>
              <h3>Author of post {user.name}</h3>
              <div style={{ marginBlock: "26px" }}>
                <p style={{ fontSize: "20px" }}>{post.body}</p>
              </div>
              <h3>Comments</h3>
              {comments && (
                <List
                  dataSource={comments}
                  renderItem={(comment) => (
                    <List.Item>
                      <Card title={comment.name} style={{ fontSize: "16px" }}>
                        <p style={{ fontWeight: "bold" }}>
                          Author: {comment.email}
                        </p>
                        <p>{comment.body}</p>
                      </Card>
                    </List.Item>
                  )}
                />
              )}
            </>
          )}
        </div>
      </Content>
    </>
  );
};

export default Post;
