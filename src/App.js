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
  const [count, setCount] = useState(1);
  const [prevCardId, setPrevCardId] = useState(-1);

  // using useEffect hooks
  useEffect(() => {
    if (icons.length < 16) {
      setIcons(iconSet);
      console.log("effect is called");
    }
  }, [setIcons, iconSet, icons]);

  // handling the on click event for card
  const handleClick = (event) => {
    var oldFlippedValues = [...isFlipped];
    const cardId = event.target.id;

    if (oldFlippedValues[cardId] === false) {
      if (prevCardId === -1) {
        setPrevCardId(cardId);
      }
      oldFlippedValues[cardId] = !oldFlippedValues[cardId];
      setIsFlipped(oldFlippedValues);
      setCount(count + 1);
    }

    if (count === 2) {
      let intervalNo = setInterval(() => {
        findMatchCard(oldFlippedValues, cardId, intervalNo);
      }, 1000);
    }
    console.log(`Count value: ${count}`);
  };

  const findMatchCard = (curFlippedValues, curCardId, intervalNo) => {
    const currentIconSet = [...icons];
    const currentFlippedValues = [...curFlippedValues];

    const prevCard = currentIconSet[prevCardId];
    const curCard = currentIconSet[curCardId];
    console.log(prevCard === curCard);

    if (prevCard === curCard) {
      // disabling the card 
      currentIconSet[prevCardId] = -1;
      currentIconSet[curCardId] = -1;

      currentFlippedValues[curCardId] = -1;
      currentFlippedValues[prevCardId] = -1;

      setIsFlipped(currentFlippedValues);
      setPrevCardId(-1);
      setIcons(currentIconSet);
      setCount(1);
    } else {
      // reflip the cards
      currentFlippedValues[curCardId] = !currentFlippedValues[curCardId];
      currentFlippedValues[prevCardId] = !currentFlippedValues[prevCardId];
      
      setIsFlipped(currentFlippedValues);
      setPrevCardId(-1);
      setCount(1);
    }

    clearInterval(intervalNo);
  };

  // returning the jsx for game
  return (
    <div className="container-fluid">
      <div className="row">
        {icons.map((item, index) => {
          return (
            <div
              key={index}
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
