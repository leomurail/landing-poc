import "./KeyStatPart.css";
import KeyStatCard from "../../components/KeyStatCard/KeyStatCard";

export default function KeyStatPart() {
  return (
    <section id="key-stat-part">
      <h2>
        <span className="key-stat-part-h2-bold">
          Le manque d’information dans la crypto
        </span>
        <br></br>
        <span className="key-stat-part-h2-medium">coûte des millions.</span>
      </h2>
      <KeyStatCard />
    </section>
  );
}
