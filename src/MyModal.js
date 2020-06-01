import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Card Memory Game
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button className="btn-success btn-lg" onClick={props.onHide}>
          Start
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
