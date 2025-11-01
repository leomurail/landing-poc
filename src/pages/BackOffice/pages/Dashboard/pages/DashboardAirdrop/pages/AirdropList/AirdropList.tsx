import AirdropCard from "./components/AirdropCard/AirdropCard";

import "./AirdropList.css";

export default function AirdropList() {
  return (
    <section id="airdrop-list">
      <AirdropCard id={1} />
      <AirdropCard id={2} />
      <AirdropCard id={3} />
    </section>
  );
}
