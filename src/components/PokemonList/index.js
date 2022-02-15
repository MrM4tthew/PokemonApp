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
    row-gap: calc((100vw - 2rem) * 0.01);
  }
`;

const index = ({ pokemons }) => {
  return (
    <PokemonList>
      {pokemons.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
    </PokemonList>
  );
};

export default index;
