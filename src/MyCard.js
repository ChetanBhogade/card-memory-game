import React from "react";
import { Card } from "react-bootstrap";
// import "./CardStyle.css";
import { FaCode } from "react-icons/fa";
import ReactCardFlip from "react-card-flip";

export default function MyCard(props) {
  return (
    <ReactCardFlip key={props.myKey} isFlipped={props.flipped} flipDirection="horizontal">
      <Card
        style={{ backgroundColor: "#8B78E6", height: "25vh" }}
        className="text-center"
        id={props.myKey}
        // onClick={() => {
        //   handleFlip();
        // }}
      >
        {/* <p className="m-4 pt-4"></p> */}
      </Card>

      <Card
        style={{ backgroundColor: "#d63031", height: "25vh" }}
        className="text-center"
        id={props.myKey}
        // onClick={() => {
        //   handleFlip();
        // }}
      >
        <p className="m-4 pt-4" id={props.myKey}>
          {props.iconName ? (
            <props.iconName size="4rem" color="#FFF" />
          ) : (
            <FaCode size="4rem" color="#FFF" />
          )}
        </p>
      </Card>
    </ReactCardFlip>
  );
}
