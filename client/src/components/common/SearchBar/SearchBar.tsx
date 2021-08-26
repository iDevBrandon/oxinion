import React from "react";
import { SearchBarGroup, SearchControl } from "./styles";

const SearchBar = () => {
  return (
    <SearchBarGroup>
      <SearchControl>
        <p>
          <span>Find</span>
        </p>
        <input
          type="text"
          placeholder="Find whatever in your local community"
        />
      </SearchControl>

      <SearchControl>
        <p>
          <span>Near</span>
        </p>
        <input type="text" placeholder="Where are you going? EX) Toronto, ON" />
      </SearchControl>
    </SearchBarGroup>
  );
};

export default SearchBar;
