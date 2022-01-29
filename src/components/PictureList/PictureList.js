import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./PictureList.scss";

const PictureList = ({ data }) => {
  console.log(data)
  return (
    <Row>
      {data &&
        data.map((elem) => (
          <Col span={6}>
            <div className="pictureList__containerImg">
              <img
                className="pictureList__img"
                src={elem.url}
                alt="imagen"
              />
              <div className="pictureList__detail">
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
            <div className="pictureList__name">{elem.title}</div>
            <div className="pictureList__info">{elem.date}</div>
          </Col>
        ))}
    </Row>
  );
};

export default PictureList;
