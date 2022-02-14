import React from "react";
import styled from "@emotion/styled";

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  .title {
    font-weight: 600;
    font-size: 25px;
    opacity: 0.7;
  }

  .message {
    font-size: 14px;
    opacity: 0.4;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 18px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.15);
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  input:focus {
    outline-style: dashed;
    outline-color: #acacac;
    outline-width: 3px;
  }

  /* input::fo */
`;

const index = ({ handleInputChange, type, mypokemon }) => {
  return (
    <SearchBar>
      <span className="title">
        {mypokemon ? "My Pokemon" : "Pokemon List"}
        {type ? ` - ${type.toUpperCase()}` : ""}
      </span>
      <span className="message">
        {mypokemon
          ? "Search your pokemon by nickname"
          : "Search pokemon by name"}
      </span>
      <input type="text" placeholder="search..." onChange={handleInputChange} />
    </SearchBar>
  );
};

export default index;