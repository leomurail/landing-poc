//import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroPart from "./parts/HeroPart/HeroPart";
import AirdropListPart from "./parts/AirdropListPart/AirdropListPart";
import HowItWorksPart from "./parts/HowItWorksPart/HowItWorksPart";
import FeatureToBenefitPart from "./parts/FeatureToBenefitPart/FeatureToBenefitPart";
import KeyStatPart from "./parts/KeyStatPart/KeyStatPart";
import LastCtaPart from "./parts/LastCtaPart/LastCtaPart";

import "./FrontOffice.css";

export default function FrontOffice() {
  return (
    <section id="front-office" className="keep-up">
      <HeroPart />
      <AirdropListPart />
      <HowItWorksPart />
      <FeatureToBenefitPart />
      <KeyStatPart />
      <LastCtaPart />

      <Footer />
    </section>
  );
}
