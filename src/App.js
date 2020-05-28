import React from "react";
import MyCard from "./MyCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row my-row">
        <div className="col-3 p-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
      </div>
      <div className="row">
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
      </div>
      <div className="row">
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
      </div>
      <div className="row">
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
        <div className="col-3 px-0">
          <MyCard />
        </div>
      </div>
    </div>
  );
}

export default App;
