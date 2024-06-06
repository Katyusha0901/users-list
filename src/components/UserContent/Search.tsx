import { useState } from "react";
import search from "../../images/search.svg";
import "../../styles/Search.css";

export function Search() {
  const [isClickSearch, setIsCluckSearch] = useState<boolean>(false);

  return (
    <div className="search">
      <img className="search__icon" src={search} alt="search" />
    </div>
  );
}
