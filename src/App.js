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
import MyModal from "./MyModal";

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

  const timeToPercentage = (currentMilliSeconds, maxSeconds) => {
    const currentSeconds = currentMilliSeconds / 1000;
    const percentage = (currentSeconds / maxSeconds) * 100;
    if (percentage < 100) {
      return percentage;
    } else {
      clearInterval(intervalNumber);
      return null;
    }
  };

  // setting up useState hooks
  const [icons, setIcons] = useState([]);
  const [isFlipped, setIsFlipped] = useState(new Array(16).fill(false));
  const [count, setCount] = useState(1);
  const [prevCardId, setPrevCardId] = useState(-1);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [instructionsModal, setinstructionsModal] = React.useState(false);
  const [timerValue, setTimerValue] = useState(0);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [intervalNumber, setIntervalNumber] = useState(0);

  // using useEffect hooks
  useEffect(() => {
    if (icons.length < 16) {
      setIcons(iconSet);
      setinstructionsModal(true);
    }

    if (!isOver) {
      if (correctMatches === 8) {
        setIsOver(true);
      }
    } else {
      setGameOverModal(true);
      clearInterval(intervalNumber);
    }
  }, [setIcons, iconSet, icons, isOver, correctMatches, intervalNumber]);

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
  };

  const findMatchCard = (curFlippedValues, curCardId, intervalNo) => {
    const currentIconSet = [...icons];
    const currentFlippedValues = [...curFlippedValues];

    const prevCard = currentIconSet[prevCardId];
    const curCard = currentIconSet[curCardId];

    if (prevCard === curCard) {
      // disabling the card
      currentIconSet[prevCardId] = -1;
      currentIconSet[curCardId] = -1;

      currentFlippedValues[curCardId] = -1;
      currentFlippedValues[prevCardId] = -1;

      setIcons(currentIconSet);
      setIsFlipped(currentFlippedValues);
      setPrevCardId(-1);
      setCount(1);
      setCorrectMatches(correctMatches + 1);
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

  const calculateTimer = () => {
    setinstructionsModal(false);
    var currentMilliSeconds = 1;
    const intervalNo = setInterval(() => {
      const value = timeToPercentage(currentMilliSeconds, 39);
      setIntervalNumber(intervalNo);
      if (value !== null) {
        setTimerValue(value);
      } else {
        setIsOver(true);
      }
      currentMilliSeconds += 100;
    }, 100);
  };

  const restartGame = () => {
    setIcons(iconSet);
    setIsFlipped(new Array(16).fill(false));
    setCount(1);
    setPrevCardId(-1);
    setCorrectMatches(0);
    setIsOver(false);
    setinstructionsModal(false);
    setTimerValue(0);
    setGameOverModal(false);

    var currentMilliSeconds = 1;
    const intervalNo = setInterval(() => {
      const value = timeToPercentage(currentMilliSeconds, 39);
      setIntervalNumber(intervalNo);
      if (value !== null) {
        setTimerValue(value);
      } else {
        setIsOver(true);
      }
      currentMilliSeconds += 100;
    }, 100);
  };

  // returning the jsx for game
  return (
    <div>
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${timerValue}%` }}
        ></div>
      </div>
      <div className="container-fluid">
        <MyModal
          show={instructionsModal}
          btn="Start"
          onHide={() => {
            calculateTimer();
          }}
        >
          <h5>Instructions: </h5>
          <ul>
            <li>It is a timed card memory game.</li>
            <li>
              Click the cards to see what symbol they uncover and try to find
              the matching symbol underneath the other cards.
            </li>
            <li>
              Uncover two matching symbols at once to eliminate them from the
              game.
            </li>
            <li>Eliminate all cards as fast as you can to win the game.</li>
            <li>Have a Fun :)</li>
          </ul>
        </MyModal>
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
        <MyModal
          show={gameOverModal}
          onHide={() => {
            restartGame();
          }}
          btn="Restart"
        >
          {correctMatches === 8 ? (
            // Game Win Status
            <div className="text-center">
              <h4 className="display-4" style={{ color: "green" }}>
                You Won The Game
              </h4>
            </div>
          ) : (
            // Game Lose Status
            <div className="text-center">
              <h4 className="display-4" style={{ color: "red" }}>
                Failed
              </h4>
              <h6>Try Again Next Time</h6>
            </div>
          )}
          <br />
          <div className="container">
            <h6>Symbols Found: {correctMatches} / 8</h6>
          </div>
        </MyModal>
      </div>
    </div>
  );
}

export default App;
