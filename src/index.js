import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//import App from "./App";

const curDate = new Date();
let cur = curDate.getHours()
let str = "";
let cssStyle =  {};

if(cur > 1 && cur <12){
   str = "Good Morning";
   cssStyle.color = "green";
}else if(cur >= 12 && cur < 19){
  str = "Good Afternoon";
  cssStyle.color = "red";
}else{
  str = "Good night";
  cssStyle.color = "blue";
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
   <div>
      <h1>Hello Sir , <span style={cssStyle}>{str}</span></h1>
   </div>
  </>,
  
  rootElement
);
  