import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import HeroCard from "./components/HeroCard/HeroCard";

import "./FrontOffice.css";

export default function FrontOffice() {
  return (
    <>
      <Header></Header>
      <Button variant="secondary" size="s">
        Click me in my small pussy
      </Button>
      <Title>Landing POC</Title>
      <div id="containerCards">
        <HeroCard
          title="Soyez informé "
          text="Accédez à la liste des Airdrops prometteurs"
        />
        <HeroCard
          title="Soyez informé "
          text="Accédez à la liste des Airdrops prometteurs"
        />
        <HeroCard
          title="Soyez informé "
          text="Accédez à la liste des Airdrops prometteurs"
        />
      </div>
    </>
  );
}
