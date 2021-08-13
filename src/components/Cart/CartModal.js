import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { clientContext } from "../../contexts/ClientContext";
import { calcSubPrice, calcTotalPrice } from "../../helpers/calcPrice";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

const CartModal = () => {
  const { CartClose } = useContext(clientContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Корзина</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
