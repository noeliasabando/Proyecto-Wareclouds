import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import "./DetailModal.scss";

const DetailModal = ({ visible, onOk, onCancel, data }) => {
  return (
    <Modal
      className="detailModal"
      title="Explicación y detalles"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <p className="detailModal__text">Nombre: {data.title}</p>
      <p className="detailModal__text">Fecha: {data.date}</p>
      <p>{data.explanation}</p>
    </Modal>
  );
};

DetailModal.propTypes = {
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default DetailModal;
