import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./Picture.scss";

const Picture = ({ data }) => {
  return (
    <Row>
      <Col span={6}>
        <div className="picture__containerImg">
          <img className="picture__img" src={data.url} alt="imagen" />
          <div className="picture__detail">
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
        <div className="picture__name">{data.title}</div>
        <div className="picture__info">{data.date}</div>
      </Col>
    </Row>
  );
};

export default Picture;
