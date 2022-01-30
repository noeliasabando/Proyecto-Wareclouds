import React from "react";
import { Row, Col } from "antd";
import "./Header.scss";

const Header = () => {
  return (
    <Row className="header" justify="center">
      <Col className="header__title" xs={24} sm={22} md={20} lg={20}>
        Proyecto <span className="header__ware">Ware</span>
        <span className="header__clouds">clouds</span>
      </Col>
    </Row>
  );
};

export default Header;
