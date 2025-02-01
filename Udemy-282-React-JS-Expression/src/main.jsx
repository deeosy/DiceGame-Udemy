import React from "react";
import ReactDOM from "react-dom";

const name = "Derrode";
const number = 3;
const lName = "Walter";

ReactDOM.render(
  <div className="">
    <h1>Hello {name}!</h1>
    <p>What is your full name</p>
    <p>My full name is {`${name} ${lName}`} </p>
    <p>My lucky number is {number} </p>
  </div>,
  document.getElementById("root")
);
