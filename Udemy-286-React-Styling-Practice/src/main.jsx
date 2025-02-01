//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import reactDom from "react-dom";
import './index.css'

const d = new Date();
const hour = d.getHours();
console.log(d.getHours());
let greeting = "";
let greetingColor;
if (hour < 12) {
  greeting = "Good morning";
  greetingColor = { color: "red" };
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  greetingColor = { color: "green" };
} else {
  greeting = "Good evening";
  greetingColor = { color: "blue" };
}
reactDom.render(
  <div className="">
    <h1 className="heading" style={greetingColor}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
