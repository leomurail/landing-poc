import React from "react";
import "./HearoCard.css";

interface HeroCardProps {
  title: string;
  text: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, text }) => {
  return (
    <div className="card">
      <h3 className="card_title">{title}</h3>
      <p className="card_text">{text}</p>
    </div>
  );
};

export default HeroCard;
