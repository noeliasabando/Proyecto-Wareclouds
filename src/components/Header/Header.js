import React from "react";
import { Row, Col } from "antd";
import "./Header.scss";

const Header = () => {
  return (
    <Row className="header" justify="center">
      <Col className="header__title" span={22}>
        Proyecto <span className="header__ware">Ware</span>
        <span className="header__clouds">clouds</span>
      </Col>
    </Row>
  );
};

export default Header;
