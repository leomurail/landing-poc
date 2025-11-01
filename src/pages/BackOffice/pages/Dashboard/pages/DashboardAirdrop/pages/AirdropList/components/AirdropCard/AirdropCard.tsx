import { Button } from "@/components/shadcdn/ui/button";
import "./AirdropCard.css";
import { Link } from "react-router";

interface Props {
  id: number;
}

export default function AirdropCard({ id }: Props) {
  return (
    <div className="airdrop-card" data-id={id}>
      <div className="left">
        <img
          src="https://placehold.co/50x50"
          alt="airdrop image"
          width="70"
          height="70"
        />
        <div className="details">
          <h3>Title</h3>
          <p className="desc">Category</p>
        </div>
      </div>
      <div className="actions">
        <Button size="sm">
          <Link to={`/back-office/dashboard/airdrops/read/${id}`}>View</Link>
        </Button>
        <Button size="sm">
          <Link to={`/back-office/dashboard/airdrops/update/${id}`}>
            update
          </Link>
        </Button>
      </div>
    </div>
  );
}
