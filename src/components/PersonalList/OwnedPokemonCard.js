import styled from "@emotion/styled";
import React, { useContext } from "react";
import { CatchContext } from "../../../context/CatchContext";

const Card = styled.div`
  width: 100%;
  height: 223px;
  padding: 20px 13px 18px 13px;
  margin: 0px 0px 7px 0px;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */

  position: relative;
  background-color: white;

  img {
    width: 96px;
    height: 96px;
  }

  .nickname {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: -2px;
    text-align: center;
  }

  .name {
    font-size: 13px;
    opacity: 0.5;
    margin-bottom: auto;
  }

  .remove-btn {
    width: 100%;
    height: 25px;
    border-radius: 6px;
    background-color: #ff0000;
    color: white;
    font-size: 10px;
    font-weight: 600;
    border: none;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  }
`;

const OwnedPokemonCard = ({ item }) => {
  const { openOwnedPokemonDeleteForm } = useContext(CatchContext);
  return (
    <Card>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokemonId}.png`}
        alt="pokemon"
      />
      <span className="nickname">{item.nickname}</span>
      <span className="name">{item.name}</span>
      <button
        className="remove-btn"
        // onClick={() => deletePokemon(item.nickname)}
        onClick={() => openOwnedPokemonDeleteForm(item.nickname)}
      >
        Release
      </button>
      {/* <button className="remove-btn" da>Release</button> */}
    </Card>
  );
};

export default OwnedPokemonCard;
