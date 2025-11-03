import "./HearoCard.css";

interface HeroCardProps {
  title: string;
  text: string;
}

export default function HeroCard({ title, text }: HeroCardProps) {
  return (
    <div className="card">
      <h3 className="card_title">{title}</h3>
      <p className="card_text">{text}</p>
    </div>
  );
}
