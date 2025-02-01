import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

(customStyle.color = "blue") //this changes the color (variable) from red to blue 

ReactDOM.render(
  <div className="">
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <h1 style={customStyle}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
