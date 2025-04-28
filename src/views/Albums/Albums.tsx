import { useEffect, useState } from "react";
import { Layout, theme } from "antd";
import { getAlbums } from "../../api/apiCalls";
import { Link } from "react-router-dom";
import { Album as AlbumT } from "../../types/types";
import { List } from "antd";

const { Header, Content } = Layout;
const Albums = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [albums, setAlbums] = useState<AlbumT[]>([]);

  useEffect(() => {
    getAlbums().then((data) => {
      setAlbums(data);
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
        Albums
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
          <>
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
        </div>
      </Content>
    </>
  );
};

export default Albums;
