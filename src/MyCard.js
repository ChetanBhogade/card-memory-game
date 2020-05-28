import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./CardStyle.css";
import { FaCode } from "react-icons/fa";
import ReactCardFlip from "react-card-flip";

export default function MyCard() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <Card
        style={{ backgroundColor: "#8B78E6", height: "25vh" }} 
        className="text-center"
        onClick={() => {
          handleClick();
        }}
      >
        <p className="m-4 pt-4"></p>
      </Card>

      <Card
        style={{ backgroundColor: "#d63031", height: "25vh" }} 
        className="text-center"
        onClick={() => {
          handleClick();
        }}
      >
        <p className="m-4 pt-4">
          <FaCode size="4rem" color="#FFF" />
        </p>
      </Card>
    </ReactCardFlip>
  );
}
