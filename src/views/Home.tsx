import { Layout, theme } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
        Home
      </Header>
      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            This is a simple UI to demonstrate the use of the JSONPlaceholder
            API. Click on the links in the menu to see the different resources.
          </p>
          <ul
            style={{
              textAlign: "left",
              listStyleType: "none",
              marginBlock: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Button type="primary">
              <Link
                to="/posts"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Posts
              </Link>
            </Button>
            <br />
            <Button type="primary">
              <Link
                to="/albums"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Albums
              </Link>
            </Button>
            <br />
            <Button type="primary">
              <Link
                to="/users"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Users
              </Link>
            </Button>
          </ul>
        </div>
      </Content>
    </>
  );
};

export default Home;
