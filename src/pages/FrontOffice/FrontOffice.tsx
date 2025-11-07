import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import HeroCard from "./components/HeroCard/HeroCard";
import SearchBar from "./components/SearchBar/SearchBar";
import CardAirdrop from "./components/CardAirdrop/CardAirdrop";
import HowItWorkPart from "./components/HowItWorkPart/HowItWorkPart";
import CardFeature from "./components/CardFeature/CardFeature";
import KeyStatCard from "./components/KeyStatCard/KeyStatCard";
import RoundButton from "./components/RoundButton/RoundButton";
import Footer from "./components/Footer/Footer";
import HeroPart from "./parts/HeroPart/HeroPart";
import AirdropListPart from "./parts/AirdropListPart/AirdropListPart";

import "./FrontOffice.css";

export default function FrontOffice() {
  return (
    <section id="front-office" className="keep-up">
      <Header />
      <HeroPart />
      <AirdropListPart />
      <KeyStatCard />
      <CardFeature
        title="Nous vous alertons"
        text="Au bon moment pour claim l'airdrop"
        imgSrc="img/svg/notifications.svg"
      />
      <HowItWorkPart text="Connecte ton Telegram" number={1} />
      <CardAirdrop
        imgSrc="/img/webp/airdrop_project.webp"
        statu="En cours"
        title="Blast"
        text="BlockChain"
      />
      <Button
        variant="primary"
        size="s"
        imgSrc="/img/svg/eye.svg"
        imgAlt="eye icon"
        imgPosition="right"
      >
        Click me in my small pussy
      </Button>
      <Title>Landing POC</Title>
      <RoundButton />
      <SearchBar placeholder="Rechercher un airdrop..." />
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
      <Footer />
    </section>
  );
}
