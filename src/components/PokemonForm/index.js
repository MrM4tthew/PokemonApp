import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CatchContext } from "../../../context/CatchContext";
import { enableBodyScroll } from "body-scroll-lock";

const PokemonForm = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 240px;
  width: 400px;
  box-sizing: border-box;
  padding: 21px 23px;
  /* justify-content: space-between; */

  .topContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .infoContainer {
      .title {
        font-size: 20px;
        font-weight: 600;
        opacity: 0.8;
      }

      .subtitle {
        font-size: 15px;
        font-weight: 500;
        opacity: 0.5;
      }
    }
  }

  .bottomContainer {
    width: 100%;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        border: none;
        border-radius: 5px;
        height: 37px;
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.8);
        box-sizing: border-box;
        padding-left: 20px;
        font-size: 13px;
        margin-bottom: 10px;
      }

      button {
        border: none;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
        height: 45px;
        font-size: 17px;
        background-color: #75e73f;
        opacity: 1;
        color: white;
        border-radius: 8px;
        transition: opacity 200ms ease-out;
        cursor: pointer;

        &:hover {
          opacity: 0.6;
        }
      }

      button:disabled,
      button[disabled] {
        opacity: 0.1;
        transition: 100ms ease-in;
      }

      .errMsg {
        font-size: 12px;
        color: red;
        opacity: 0.7;
        margin-top: -6px;
        margin-bottom: 7px;
      }
    }
  }
`;

const Index = () => {
  const { pokemon, setSavedPokemon, savePokemon, data, setStatus } =
    useContext(CatchContext);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);

  const isFoundNickname = data.some((e) => {
    if (e.nickname === nickname && e.name === pokemon.name) {
      return true;
    }
  });
  useEffect(() => {
    setSavedPokemon({
      pokemonId: pokemon.id,
      name: pokemon.name,
      nickname: nickname,
      type: pokemon.pokemon_v2_pokemontypes,
    });
    setMessage("");

    if (nickname != "") {
      if (isFoundNickname == true) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    } else {
      setDisable(true);
    }
  }, [nickname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFoundNickname) {
      savePokemon();
      setStatus();
    }
  };

  return (
    <PokemonForm>
      <div className="topContainer">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt=""
        />
        <div className="infoContainer">
          <div className="title">Pokemon Captured</div>
          <div className="subTitle">You may name your pokemon</div>
        </div>
      </div>
      <div className="bottomContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nickname..."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          {message}
          {isFoundNickname ? (
            <span className="errMsg">nickname is taken</span>
          ) : (
            ""
          )}
          <button
            type="submit"
            onClick={enableBodyScroll(document)}
            disabled={disable}
          >
            Catch
          </button>
        </form>
      </div>
    </PokemonForm>
  );
};

export default Index;
