import React, { useState, useEffect } from "react";
import MyCard from "./MyCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  GiFlame,
  GiEternalLove,
  GiBasketballBall,
  GiDove,
  GiBookCover,
  GiAbstract080,
  GiInfinity,
  GiSpiderAlt,
} from "react-icons/gi";

function App() {
  // setting up icons
  const iconArray = [
    GiFlame,
    GiBasketballBall,
    GiBookCover,
    GiDove,
    GiEternalLove,
    GiAbstract080,
    GiInfinity,
    GiSpiderAlt,
  ];

  const getRandomIconArray = (arr) => {
    let myArray = [...arr];
    let length = myArray.length - 1;
    for (; length > 0; length--) {
      const randomIndex = Math.floor(Math.random() * (length + 1));
      const temp = myArray[length];
      myArray[length] = myArray[randomIndex];
      myArray[randomIndex] = temp;
    }
    return myArray;
  };

  const iconSet = getRandomIconArray([
    ...getRandomIconArray(iconArray),
    ...getRandomIconArray(iconArray),
  ]);

  // setting up useState hooks
  const [icons, setIcons] = useState([]);
  const [isFlipped, setIsFlipped] = useState(new Array(16).fill(false));

  // using useEffect hooks
  useEffect(() => {
    if (icons.length < 16) {
      setIcons(iconSet);
    }
  }, [setIcons, iconSet, icons]);

  // handling the on click event for card
  const handleClick = (event) => {
    var oldFlippedValues = [...isFlipped];
    const cardId = event.target.id;

    if (oldFlippedValues[cardId] === false) {
      oldFlippedValues[cardId] = !oldFlippedValues[cardId];
      setIsFlipped(oldFlippedValues);
    }
  };

  // returning the jsx for game
  return (
    <div className="container-fluid">
      <div className="row">
        {icons.map((item, index) => {
          return (
            <div
              key={index}
              id={index}
              onClick={(event) => {
                handleClick(event);
              }}
              className="col-3 p-0"
            >
              <MyCard
                myKey={index}
                flipped={isFlipped[index]}
                iconName={item}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
