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

  const timeToPercentage = (currentMilliSeconds, maxSeconds, intervalNo) => {
    const currentSeconds = currentMilliSeconds / 1000;
    const percentage = (currentSeconds / maxSeconds) * 100;
    if (percentage < 100) {
      return percentage;
    } else {
      clearInterval(intervalNo);
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

  // using useEffect hooks
  useEffect(() => {
    if (icons.length < 16) {
      setIcons(iconSet);
      setinstructionsModal(true);
    }

    if (!isOver) {
      if (correctMatches === 8) {
        console.log("Found 8 Card Sets");
        setIsOver(true);
      }
    } else {
      console.log(`You fund: ${correctMatches} cards from effect`);
      setGameOverModal(true);
      console.log("game is over");
    }
  }, [setIcons, iconSet, icons, isOver, correctMatches]);

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
    var currentSeconds = 1;
    const intervalNo = setInterval(() => {
      // console.log(timeToPercentage(currentSeconds, 32, intervalNo));
      const value = timeToPercentage(currentSeconds, 15, intervalNo);
      if (value !== null) {
        setTimerValue(value);
      } else {
        setIsOver(true);
      }
      currentSeconds += 100;
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
          onHide={() => {
            calculateTimer();
          }}
        >
          <h5>Instructions: </h5>
          <ol>
            <li>
              You can see a grid with 4 x 4 cards. All the cards are faced down
              initially.
            </li>
            <li>
              You can click on Start button to start the game. When this button
              is clicked, a timer will start.
            </li>
            <li>
              You can click on any card to unveil the image that is underneath
              it.
            </li>
            <li>The image will be displayed until you clicks on a 2nd card.</li>
            <li>When you clicks on 2nd card: </li>
            <li>
              If there is a match, the 2 cards will be eliminated from the game.
            </li>
            <li>
              If there isn't a match, the 2 cards will flip back to their
              original state.
            </li>
            <li>Find the two cards which has the same image. </li>
            <li>You have total 8 sets of images (means: total 16 cards)</li>
          </ol>
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
        <MyModal show={gameOverModal}>
          <h3>Fail</h3>
          <h5>Images Found: {correctMatches}</h5>
        </MyModal>
      </div>
    </div>
  );
}

export default App;
