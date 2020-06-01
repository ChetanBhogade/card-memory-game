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
        <h5>Instructions: </h5>
        <ol>
          <li>You can see a grid with 4 x 4 cards. All the cards are faced down initially. </li>
          <li>You can click on Start button to start the game. When this button is clicked, a timer will start. </li>
          <li>You can click on any card to unveil the image that is underneath it. </li>
          <li>The image will be displayed until you clicks on a 2nd card. </li>
          <li>When you clicks on 2nd card: </li>
          <li>If there is a match, the 2 cards will be eliminated from the game. </li>
          <li>If there isn't a match, the 2 cards will flip back to their original state </li>
          <li>Find the two cards which has the same image. </li>
          <li>You have total 8 sets of images (means: total 16 cards)</li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-success btn-lg" onClick={props.onHide}>Start</Button>
      </Modal.Footer>
    </Modal>
  );
}
