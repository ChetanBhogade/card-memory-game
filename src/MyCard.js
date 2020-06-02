import React from "react";
import { Card } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import ReactCardFlip from "react-card-flip";

export default function MyCard(props) {
  return (
    <ReactCardFlip
      key={props.myKey}
      isFlipped={props.flipped !== -1 ? props.flipped : false}
      flipDirection="horizontal"
    >
      {/* front card  */}
      {props.iconName === -1 ? (
        <Card style={{ backgroundColor: "#FFF", height: "24.68vh", border: "none" }} />
      ) : (
        <Card
          style={{ backgroundColor: "#8B78E6", height: "24.68vh" }}
          className="text-center"
          id={props.myKey}
        ></Card>
      )}

      {/* back Card  */}
      <Card
        style={{ backgroundColor: "#d63031", height: "24.68vh" }}
        className="text-center"
        id={props.myKey}
      >
        <p className="m-2 pt-4" id={props.myKey}>
          {props.iconName !== -1 ? (
            <props.iconName size="4rem" color="#FFF" />
          ) : (
            <FaCheck size="4rem" color="#2ecc72" />
          )}
        </p>
      </Card>
    </ReactCardFlip>
  );
}
