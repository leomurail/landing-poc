import "./LastCtaPart.css";
import Button from "../../components/Button/Button";

export default function HowItWorksPart() {
  return (
    <section id="last-cta-part">
      <div id="img-container-last-cta">
        <img
          className="img-last-cta"
          src="../../img/webp/illustration-last-cta.webp"
          alt=""
        />
      </div>

      <div className="last-cta-container-part">
        <div className="last-cta-text">
          <h2 className="title-last-cta">Ne loupe plus les occasions </h2>
          <p className="text-last-cta">
            Prend en main la gestion de tes Airdrops, dès maintenant
          </p>
        </div>
        <Button variant="primary" size="l">
          Je passe à l’action
        </Button>
      </div>
    </section>
  );
}
