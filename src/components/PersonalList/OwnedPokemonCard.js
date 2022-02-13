import React, { useContext } from "react";
import { CatchContext } from "../../../context/CatchContext";

const OwnedPokemonCard = ({ item }) => {
  const { deletePokemon } = useContext(CatchContext);
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokemonId}.png`}
        alt=""
      />
      <h2>{item.nickname}</h2>
      <button onClick={() => deletePokemon(item.nickname)}>Release</button>
    </div>
  );
};

export default OwnedPokemonCard;
