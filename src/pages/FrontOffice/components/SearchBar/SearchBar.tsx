import "./SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Rechercher un airdrop...",
}: SearchBarProps) {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={value}
        className="searchbar__input"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className="searchbar__btn">
        <img src="icon/search.svg" alt="Rechercher" />
      </button>
    </div>
  );
}
