import React from "react";
import ReactDOM from "react-dom/client";
import Sum from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const name = 'Rohit';

const a = 100;
const b = 200;

root.render(
  <div className="">
    <h1>
      Sum is <Sum num1={a} num2={b} />
    </h1>
    <h2>Heading</h2>
  </div>
);
