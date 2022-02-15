import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "@emotion/styled";
import { typesColor } from "../../../src/info/typecolor";
import { screenSize } from "../../../styles/screenSize";

const PokemonList = styled.div`
  display: grid;
  /* grid-template-columns: 190px 190px 190px 190px; */
  grid-template-columns: 19.4% 19.4% 19.4% 19.4% 19.4%;
  margin: 20px 0px;
  column-gap: 0.75%;
  row-gap: 7px;
  position: relative;

  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: 24.4375% 24.4375% 24.4375% 24.4375%;
    row-gap: calc((100vw - 2rem) * 0.007);
  }

  @media (max-width: ${screenSize.almostMobile}) {
    grid-template-columns: 32.8% 32.8% 32.8%;
    row-gap: calc((100vw - 2rem) * 0.009);
  }

  @media (max-width: ${screenSize.mobile}) {
    grid-template-columns: 48.5% 48.5%;
    column-gap: 3%;
    row-gap: calc((100vw - 2rem) * 0.03);
  }

  .empty-message {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    img {
      width: 50px;
      margin-bottom: 15px;
    }

    span {
      font-size: 17px;
      opacity: 0.7;
      font-weight: 500;
    }
  }
`;

const index = ({ pokemons }) => {
  return (
    <PokemonList>
      {pokemons == "" ? (
        <div className="empty-message">
          <img src="/emptybag.svg" alt="" />
          <span>New pokemon have not been added</span>
        </div>
      ) : (
        pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))
      )}
    </PokemonList>
  );
};

export default index;
