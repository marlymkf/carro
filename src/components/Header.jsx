import React, { useState } from "react";
import Button from "./Button";

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header
      className={`cabecalho flex justify-between align-center ${
        isMenuOpen ? "active" : ""
      }`}
    >
      <img
        className="carro"
        src="img/logo (3).png"
        alt="carro"
        width="78"
        height="32"
      />

      <div class="nav flex justify-between align-center">
        <ul className="lista flex align-center">
          <li>
            <a href="Collections">Collections</a>
          </li>
          <li>
            <a href="Artists">Artists</a>
          </li>
        </ul>
        <input className="input" type="text" value="Search" />
      </div>
      <Button className="botao">Download</Button>
      <Button className="botao--branco">Sign in</Button>
      <button id="btn-mobile" onClick={handleMenu}>
        Menu
        <span id="hamburger"></span>
      </button>
    </header>
  );
};

export default Header;
