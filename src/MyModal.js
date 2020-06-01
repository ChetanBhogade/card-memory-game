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
      <Modal.Body>
        <h5>Instructions</h5>
        <ol>
          <li>Find the two cards which has the same icon </li>
          <li>You have total 8 sets of icons (means: total 16 cards)</li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
