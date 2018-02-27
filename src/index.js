import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// //a proof of compilation
// console.log('42')

// //the ES6
// const a = [1,2,3];
// const b = [4,5,6];

// let c = [...a, ...b] //spread

// const iamAFatArrowWhatAreYou = () => { console.log(...c);}
// window.iamAFatArrowWhatAreYou = iamAFatArrowWhatAreYou;
