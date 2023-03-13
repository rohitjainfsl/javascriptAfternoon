import React from "react";
import Main from "./Main";
import About from "./About";
import Cart from "./Cart";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";


// Lifting State Up: passing variables as props. This decreases code reusability

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
