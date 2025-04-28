import { useParams } from "react-router-dom";
import { getPhotos, getAlbum } from "../../api/apiCalls";
import { Layout, List, theme } from "antd";
import { useEffect, useState } from "react";
import type { Album, Photo } from "../../types/types";

const { Header, Content } = Layout;

const Album = () => {
  const { id } = useParams();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [album, setAlbum] = useState<Album>();

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      getAlbum(parsedId).then((data) => {
        setAlbum(data);
      });
      getPhotos().then((data) => {
        setPhotos(data.filter((photo: Photo) => photo.albumId === parsedId));
      });
    }
  }, [id]);

  if (!id) return null;

  return (
    <>
      <Header
        className="header-style"
        style={{
          padding: "0",
          background: colorBgContainer,
          textAlign: "center",
          fontSize: "1.5vw",
          marginBottom: "2vh",
          whiteSpace: "normal",
          wordWrap: "break-word",
          overflow: "hidden",
        }}
      >
        {album ? album.title : "Album Title"}
      </Header>
      <Content
        style={{ margin: "0 2vw", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            padding: "3vh",
            flex: 1,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {album && (
            <>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                Photos
              </p>

              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={photos}
                renderItem={(photo) => (
                  <List.Item>
                    <img
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      style={{ maxWidth: "100%", maxHeight: "150px" }}
                    />
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

export default Album;
