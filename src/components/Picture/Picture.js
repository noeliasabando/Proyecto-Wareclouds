import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import Video from "../Video/Video";
import "./Picture.scss";

const Picture = ({ data }) => {
  return (
    <Row>
      <Col span={6}>
        <div>
          {data.media_type === "img" ? (
            <img src={data.url} alt="imagen" />
          ) : (
            <Video url={data.url} />
          )}

          <div>
            <Link to="detail">
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
            </Link>
          </div>
        </div>
        <div>Nombre: {data.title}</div>
        <div>Fechass: {data.date}</div>
      </Col>
    </Row>
  );
};

export default Picture;
