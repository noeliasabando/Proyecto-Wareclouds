import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import Video from "../Video/Video";
import DetailModal from "../DetailModal/DetailModal";
import "./Picture.scss";

const Picture = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Row className="picture" justify="center">
      <DetailModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        data={data}
      />
      <Col xs={22} sm={12} md={9} lg={6} className="picture__card">
        <div>
          {data.media_type === "img" ? (
            <img src={data.url} alt="imagen" />
          ) : (
            <Video url={data.url} />
          )}
        </div>
        <div>
          <Button
            style={{
              color: "white",
              borderRadius: "10px",
              background: "#63c",
              margin: "10px 0",
            }}
            type="primary"
            onClick={showModal}
          >
            Ver detalles
          </Button>
        </div>
        <div className="picture__text">Nombre: {data.title}</div>
        <div className="picture__text">Fecha: {data.date}</div>
      </Col>
    </Row>
  );
};

export default Picture;
