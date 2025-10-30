import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import logo from "../../img/logo_keepup.webp";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="header__nav">
        <a href="#hero">Liste des airdrops</a>
        <a href="#features">La solution</a>
        <a href="#pricing">Chiffres clés</a>
        <a href="#contact">Les fonctionnalités</a>
        <a href="#contact">Comment ça marche ?</a>
      </nav>

      <div className="header__cta">
        <Button variant="secondary" size="s">
          Rester informé
        </Button>
      </div>
    </header>
  );
};

export default Header;
