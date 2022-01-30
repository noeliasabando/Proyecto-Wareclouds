import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import DetailModal from "../DetailModal/DetailModal";
import Video from "../Video/Video";
import "./PictureList.scss";

const PictureList = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedElement, setSelectedElement] = useState();
  const showModal = (element) => {
    setSelectedElement(element);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedElement();
  };

  return (
    <Row className="pictureList">
      {selectedElement && (
        <DetailModal
          visible={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
          data={selectedElement}
        />
      )}

      {data &&
        data.map((elem) => (
          <Col xs={22} sm={12} md={12} lg={6} className="gutter-row">
            <div className="pictureList__card">
              <div className="pictureList__containerImg">
                {elem.media_type === "image" ? (
                  <img
                    className="pictureList__img"
                    src={elem.url}
                    alt="imagen"
                  />
                ) : (
                  <Video url={elem.url} />
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
                  onClick={() => showModal(elem)}
                >
                  Ver detalles
                </Button>
              </div>
              <div className="pictureList__name">Nombre: {elem.title}</div>
              <div className="pictureList__info">Fecha: {elem.date}</div>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default PictureList;
