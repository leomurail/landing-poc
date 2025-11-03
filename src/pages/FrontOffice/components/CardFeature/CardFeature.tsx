import "./CardFeature.css";
import Button from "../Button/Button";

interface CardFeatureProps {
  title: string;
  text: string;
  imgSrc: string;
}
export default function CardFeature({ title, text, imgSrc }: CardFeatureProps) {
  return (
    <div className="card-feature">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <Button variant="primary" size="m">
        Rester alerté
      </Button>
    </div>
  );
}
