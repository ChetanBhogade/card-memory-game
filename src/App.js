import React from "react";
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

  const iconSet = [getRandomIconArray(iconArray), getRandomIconArray(iconArray)];

  return (
    <div className="container-fluid">
      <div className="row">
        {iconSet.map((setIcon) => {
          return setIcon.map((item, index) => {
            return (
              <div key={index} className="col-3 p-0">
                <MyCard iconName={item} />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
