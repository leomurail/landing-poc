import "./Header.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className="header">
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
      <div className="header-phone">
        <div className="phone-header-logo">
          <img src="/img/svg/menu-burger.svg" alt="Logo" />
        </div>
        <div className="phone-header-cta">
          <Button variant="primary" size="s">
            Rester informé
          </Button>
        </div>
      </div>
    </header>
  );
}
