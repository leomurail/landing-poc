import "./SearchBar.css";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "placeholder",
}: SearchBarProps) {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        placeholder={placeholder}
      />
      <button className="searchbar__btn">
        <img src="icon/search.svg" alt="Rechercher" />
      </button>
    </div>
  );
}
