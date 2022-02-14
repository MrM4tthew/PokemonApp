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

const Index = () => {
  const { pokemon, setSavedPokemon, savePokemon, data, setStatus } =
    useContext(CatchContext);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setSavedPokemon({
      pokemonId: pokemon.id,
      name: pokemon.name,
      nickname: nickname,
    });
    setMessage("");

    if (nickname != "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [nickname]);

  const isFoundNickname = data.some((e) => {
    if (e.nickname === nickname && e.name === pokemon.name) {
      return true;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFoundNickname) {
      savePokemon();
      setStatus();
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
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {message}
        {isFoundNickname ? "nickname is taken" : ""}
        {/* {message2} */}
        <button type="submit" disabled={disable}>
          Catch
        </button>
      </form>
    </PokemonForm>
  );
};

export default Index;
