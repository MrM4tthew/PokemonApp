import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "@emotion/styled";
import { typesColor } from "../../../src/info/typecolor";

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0px;
`;

const index = ({ pokemons }) => {
  console.log("colorsCode", typesColor);
  return (
    <PokemonList>
      {pokemons.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
    </PokemonList>
  );
};

export default index;
