import React from "react";
import { Card } from "react-bootstrap";
import "./CardStyle.css";
import { FaBeer } from "react-icons/fa";

export default function MyCard() {
  return (
    <Card
      style={{ backgroundColor: "#8B78E6", height: "25vh" }}
      className="text-center"
    >
      <p>
        <FaBeer />
      </p>
    </Card>
  );
}
