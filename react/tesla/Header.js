import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuShow(e) {
    e.preventDefault();
    setMenuOpen(true)
  }

  function menuHide(e) {    
    setMenuOpen(false)
  }

  return (
    <div className="header">
      <img src="images/logo.svg"></img>
      <ul>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panel</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a onClick={menuShow} href="">
            Menu
          </a>
        </li>
      </ul>

      <ul className="sidebar" style={{right: (menuOpen) ? '0' : '-250px'}}>
        <CloseIcon className="cross" onClick={menuHide} />
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panel</a>
        </li>
        <li>
          <a href="">Trade In</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href="">Powerwall</a>
        </li>
        <li>
          <a href="">Commercial Energy</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
