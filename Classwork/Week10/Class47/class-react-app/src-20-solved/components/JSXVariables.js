import React from "react";

const nameFirst = "Varun";
const thoughts = "is meh at first but looks useful";


function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {nameFirst}</h1>
          <h2>My name has {nameFirst.length} letters</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
