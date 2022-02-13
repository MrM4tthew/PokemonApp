import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CatchContext } from "../../../context/CatchContext";

const PokemonForm = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 400px;
  /* justify-content: space-between; */
`;

const index = () => {
  const { pokemon, setSavedPokemon, savePokemon, data, setStatus } =
    useContext(CatchContext);
  const [nickname, setNickname] = useState("");
  const [message1, setMessage] = useState("");

  useEffect(() => {
    setSavedPokemon({
      pokemonId: pokemon.id,
      name: pokemon.name,
      nickname: nickname,
    });
    setMessage("");
  }, [nickname]);

  const isFoundNickname = data.some((e) => {
    if (e.nickname === nickname && e.name === pokemon.name) {
      return true;
    }
  });

  const validate = () => {
    if (nickname == "") {
      setMessage("name cannot be empty");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid && !isFoundNickname) {
      savePokemon();
      setStatus(false);
    }
  };

  return (
    <PokemonForm>
      <div className="pokemon-img-container">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt=""
        />
      </div>
      <h2>Gotcha</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {message1}
        {isFoundNickname ? "nickname is taken" : ""}
        {/* {message2} */}
        <input type="submit" />
      </form>
    </PokemonForm>
  );
};

export default index;
