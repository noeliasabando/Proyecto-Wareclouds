import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import Video from "../Video/Video";
import "./PictureList.scss";

const PictureList = ({ data }) => {
  console.log(data);
  return (
    <Row>
      {data &&
        data.map((elem) => (
          <Col span={6}>
            <div className="pictureList__containerImg">
              {elem.media_type === "image" ? (
                <img className="pictureList__img" src={elem.url} alt="imagen" />
              ) : (
                <Video url={elem.url} />
              )}

              <div>
                <Button
                  style={{
                    color: "white",
                    borderRadius: "10px",
                    background: "#63c",
                  }}
                  type="primary"
                >
                  Ver detalles
                </Button>
              </div>
            </div>
            <div className="pictureList__name">Nombre: {elem.title}</div>
            <div className="pictureList__info">Fecha: {elem.date}</div>
          </Col>
        ))}
    </Row>
  );
};

export default PictureList;
