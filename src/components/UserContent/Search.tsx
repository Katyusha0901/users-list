import { useState } from "react";
import search from "../../images/search.svg";
import "../../styles/Search.css";

interface Props {}

export const Search: React.FC<Props> = () => {
  const [isClickSearch, setIsClickSearch] = useState<boolean>(false);

  return isClickSearch ? (
    <div className="search">
      <div className="search__input-field">
        <input
          className="search__input"
          value="Поиск по Email"
          onChange={() => {}}
        ></input>
        <img
          className="search__icon"
          src={search}
          alt="search"
          onClick={() => setIsClickSearch(false)}
        />
      </div>
      <div className="search__input-field-mobile">
        <input
          className="search__input-mobile"
          value="Поиск по Email"
          onChange={() => {}}
        ></input>
        <img className="search__icon-mobile" src={search} alt="search" />
      </div>
    </div>
  ) : (
    <div className="search" onClick={() => setIsClickSearch(true)}>
      <img
        className="search__icon search__iconNotActive"
        src={search}
        alt="search"
      />
      <div className="search__input-field-mobile">
        <input
          className="search__input-mobile"
          value="Поиск по Email"
          onChange={() => {}}
        ></input>
        <img className="search__icon-mobile" src={search} alt="search" />
      </div>
    </div>
  );
};
