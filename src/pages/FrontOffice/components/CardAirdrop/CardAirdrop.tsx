import "./CardAirdrop.css";
import Button from "../Button/Button";

interface CardAirdropProps {
  title: string;
  text: string;
  statu: string;
  imgSrc: string;
}
export default function CardAirdrop({
  title,
  text,
  statu,
  imgSrc,
}: CardAirdropProps) {
  return (
    <div className="card-airdrop">
      <div className="img_statu">
        <img src={imgSrc} alt={title} />
        <p>{statu}</p>
      </div>
      <div className="card-airdrop__content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="Card__cta">
        <Button variant="primary" size="m">
          Voir plus
        </Button>
      </div>
    </div>
  );
}
