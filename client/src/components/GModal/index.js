import React from "react";

import Modal from "react-bootstrap/Modal";

const GModal = (props) => {
  const { show } = props;

  return (
    <Modal show={show} className="g-modal">
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default GModal;
