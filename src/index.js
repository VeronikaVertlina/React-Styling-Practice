import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2022, 1, 1, 13);
const currentTime = date.getHours();

let toSay = "";

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  toSay = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  toSay = "Good Afternoon";
  customStyle.color = "green";
} else {
  toSay = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {toSay}
  </h1>,
  document.getElementById("root")
);
