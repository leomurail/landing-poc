import "./HowItWorkPart.css";

interface HowItWorkPartProps {
  number: number;
  text: string;
}
export default function CardAirdrop({ number, text }: HowItWorkPartProps) {
  return (
    <div className="container">
      <div className="nuber_part">
        <p>{number}</p>
      </div>
      <h3>{text}</h3>
    </div>
  );
}
