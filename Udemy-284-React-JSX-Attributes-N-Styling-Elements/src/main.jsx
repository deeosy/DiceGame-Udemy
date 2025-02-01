import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const img =
  "https://3.imimg.com/data3/UP/YK/MY-17273090/hakka-noddles-500x500.jpg";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <img
      src="https://i.ytimg.com/vi/gIXpvwmFk6M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_SbGw-YSj1mj3l2N9xHYgP0MOxg"
      className="image"
      alt=""
    />
    <img src={img + "?grayscale"} className="image" alt="" />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KAURkofAqpvWVnOugzomwVakD9Xro-m4zA&s"
      className="image"
      alt=""
    />
  </div>,
  document.getElementById("root")
);
