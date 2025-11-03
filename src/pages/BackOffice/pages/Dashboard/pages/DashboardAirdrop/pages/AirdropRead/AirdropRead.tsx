import { Button } from "@/components/shadcdn/ui/button";
import { Link } from "react-router";

export default function AirdropRead() {
  return (
    <section id="airdrop-read">
      <img
        src="https://placehold.co/120x120"
        width={120}
        height={120}
        alt="Airdrop logo"
      />
      <h2>Airdrop title</h2>
      <span>Category</span>
      <span>Status</span>
      <Button>
        <Link to="https://leomurail.com">Lien du claim</Link>
      </Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
        convallis lorem eget mattis. Vivamus at porttitor dui. Nullam luctus
        augue purus, sit amet fermentum nulla molestie a. Nam tristique metus
        sit amet lorem faucibus, in tempor nunc rhoncus. Etiam quis hendrerit
        felis. Donec ut nibh arcu. Cras ut elementum mauris, eget malesuada
        dolor.
      </p>

      <div className="social_medias">
        <div>
          <img
            src="https://placehold.co/25x25"
            width={25}
            height={25}
            alt="social media"
          />
          <span className="social_name">Instagram</span>
        </div>

        <div>
          <img
            src="https://placehold.co/25x25"
            width={25}
            height={25}
            alt="social media"
          />
          <span className="social_name">Twitter</span>
        </div>

        <div>
          <img
            src="https://placehold.co/25x25"
            width={25}
            height={25}
            alt="social media"
          />
          <span className="social_name">Url</span>
        </div>
      </div>
    </section>
  );
}
