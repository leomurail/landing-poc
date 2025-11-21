import "./Header.css";
import Button from "../Button/Button";
import { useRef } from "react";

export default function Header() {
  const menuRef = useRef<HTMLDivElement>(null);

  // Gestion ouvement/fermeture burger
  const handleMenuOpen = () => {
    menuRef.current?.classList.toggle("menu-open");
  };
  const handleMenuClose = () => {
    menuRef.current?.classList.remove("menu-open");
  };

  return (
    <header className="header">
      {/* HEADER DESKTOP */}
      <div className="header-desktop">
        <div className="header-logo">
          <img src="/img/webp/logo-keepup.webp" alt="Logo" />
        </div>
        <nav className="header-nav">
          <a href="#hero">Liste des airdrops</a>
          <a href="#features">La solution</a>
          <a href="#pricing">Chiffres clés</a>
          <a href="#contact">Les fonctionnalités</a>
          <a href="#contact">Comment ça marche ?</a>
        </nav>
        <div className="header-cta">
          <Button variant="primary" size="s">
            Rester informé
          </Button>
        </div>
      </div>

      {/* HEADER MOBILE */}
      <div className="header-phone">
        <div className="phone-header-logo">
          <button
            className="menu-burger-btn"
            onClick={handleMenuOpen}
            aria-label="Ouvrir le menu"
          >
            <img src="/img/svg/menu-burger.svg" alt="Menu Burger" />
          </button>
        </div>
        <div className="phone-header-cta">
          <Button variant="primary" size="s">
            Rester informé
          </Button>
        </div>

        {/* Menu lateral qui s’ouvre au clic */}
        <div className="phone-burger-menu" ref={menuRef}>
          <div className="container-phone-menu-logo-btn">
            <img src="/img/webp/logo-keepup.webp" alt="Logo" />

            <button
              className="menu-close-btn"
              onClick={handleMenuClose}
              aria-label="Fermer le menu"
            >
              &times;
            </button>
          </div>

          <nav>
            <a href="#hero">Liste des airdrops</a>
            <a href="#features">La solution</a>
            <a href="#pricing">Chiffres clés</a>
            <a href="#contact">Les fonctionnalités</a>
            <a href="#contact">Comment ça marche ?</a>
          </nav>
          <div className="container-phone-menu-cta-rs">
            <div className="container-phone-menu-cta">
              <p className="container-phone-menu-cta-title">
                Connect ton Telegram
              </p>
              <div className="phone-menu-cta">
                <Button
                  variant="primary"
                  size="s"
                  imgSrc="/img/webp/telegram.webp"
                  imgAlt="telegram icon"
                  imgPosition="right"
                >
                  Bot Telegram
                </Button>
                <Button
                  variant="secondary"
                  size="s"
                  imgSrc="/img/svg/eye.svg"
                  imgAlt="eye icon"
                  imgPosition="right"
                >
                  Airdrops
                </Button>
              </div>
            </div>
            <div className="container-phone-menu-rs">
              <p className="container-phone-menu-rs-title">Rester informé</p>
              <div className="phone-menu-rs">
                <img
                  className="phone-menu-img-rs"
                  src="img/webp/twitter.webp"
                  alt="logo twitter"
                />
                <img
                  className="phone-menu-img-rs"
                  src="img/webp/discord.webp"
                  alt="logo discord"
                />
                <img
                  className="phone-menu-img-rs"
                  src="img/webp/telegram.webp"
                  alt="logo telegram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
