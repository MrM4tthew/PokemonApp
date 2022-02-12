import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "@emotion/styled";

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0px;
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
