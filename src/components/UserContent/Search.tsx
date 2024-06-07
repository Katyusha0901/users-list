import { useState } from "react";
import search from "../../images/search.svg";
import "../../styles/Search.css";

interface Props {}

export const Search: React.FC<Props> = () => {
  const [isClickSearch, setIsCluckSearch] = useState<boolean>(false);

  return isClickSearch ? (
    <div className="search">
      <div className="search__input-field">
        <input className="search__input" value="Поиск по Email"></input>
        <img
          className="search__icon"
          src={search}
          alt="search"
          onClick={() => setIsCluckSearch(false)}
        />
      </div>
    </div>
  ) : (
    <div className="search" onClick={() => setIsCluckSearch(true)}>
      <img
        className="search__icon search__iconNotActive"
        src={search}
        alt="search"
      />
    </div>
  );
};
