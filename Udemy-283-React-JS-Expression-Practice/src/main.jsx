//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Derrode";
const lName = "Walter";
let d = new Date();
let year = d.getFullYear();
ReactDOM.render(
  <div className="">
    <p>Created by {`${fName} ${lName}`}</p>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
