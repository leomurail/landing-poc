import { useState } from "react";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import HeroCard from "./components/HeroCard/HeroCard";
import SearchBar from "./components/SearchBar/SearchBar";
import CardAirdrop from "./components/CardAirdrop/CardAirdrop";
import HowItWorkPart from "./components/HowItWorkPart/HowItWorkPart";
import CardFeature from "./components/CardFeature/CardFeature";
import KeyStatCard from "./components/KeyStatCard/KeyStatCard";

import "./FrontOffice.css";

export default function FrontOffice() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section id="front-office" className="keep-up">
      <Header />
      <KeyStatCard />
      <CardFeature
        title="Nous vous alertons"
        text="Au bon moment pour claim l'airdrop"
        imgSrc="icon/notifications.svg"
      />
      <HowItWorkPart text="Connecte ton Telegram" number={1} />
      <CardAirdrop
        imgSrc="/img/airdrop_project.webp"
        statu="En cours"
        title="Titre de l'airdrop"
        text="Description de cet airdrop prometteur."
      />
      <Button variant="primary" size="s">
        Click me in my small pussy
      </Button>
      <Title>Landing POC</Title>
      <SearchBar
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
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
    </section>
  );
}
