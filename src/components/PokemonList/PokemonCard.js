import React, { useContext } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { typesColor } from "../../../src/info/typecolor";
import { css } from "@emotion/react";
import { CatchContext } from "../../../context/CatchContext";
import { screenSize } from "../../../styles/screenSize";

// const dynamicStyle = (props) => css`
//   background-color: rgba(${props.red}, ${props.green}, ${props.blue}, 0.18);
// `;
const dynamicStyle2 = (props) => css`
  background-color: rgba(${props.red}, ${props.green}, ${props.blue}, 0.5);
`;

const Card = styled.div`
  width: 100%;
  height: 243px;
  padding: 20px 18px 25px 18px;
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

  /* @media (max-width: ${screenSize.mobile}) {
    width: 100%;
  } */

  img {
    width: 96px;
    height: 96px;
  }

  .name {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: auto;
    text-align: center;
  }

  .pokemon-id {
    font-size: 11px;
    opacity: 0.5;
    margin-bottom: -2px;
    /* margin-bottom: auto; */
  }

  .short-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .types {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    .owned {
      font-size: 10px;
      opacity: 0.5;
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
`;

const TypeCard = styled.div`
  ${dynamicStyle2}
  padding: 5px 7px;
  border-radius: 8px;
  font-size: 10px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.6);

  &:first-of-type {
    margin-right: 3px;
  }
`;

const PokemonCard = ({ pokemon }) => {
  const { data } = useContext(CatchContext);
  const name = pokemon.name.replace(/-/g, " ");
  const nameLength = pokemon.id.toString().length;

  // Check pokemon name in local storage
  const isFoundName = data.some((e) => {
    if (e.name === pokemon.name) {
      return true;
    }
  });

  // Change pokemon id format
  const pokeId = () => {
    if (nameLength == 1) {
      return `#00${pokemon.id}`;
    } else if (nameLength == 2) {
      return `#0${pokemon.id}`;
    } else {
      return `#${pokemon.id}`;
    }
  };

  // console.log(pokeId());

  return (
    // <Card red={red} blue={blue} green={green}>
    <Card>
      <LazyLoad height={400}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt=""
        />
      </LazyLoad>

      <span className="pokemon-id">{pokeId()}</span>
      <span className="name">{name}</span>
      <div className="short-info-container">
        <div className="types">
          {pokemon.pokemon_v2_pokemontypes.map((type, index) => (
            <TypeCard
              red={
                typesColor.find((x) => x.name === type.pokemon_v2_type.name).red
              }
              green={
                typesColor.find((x) => x.name === type.pokemon_v2_type.name)
                  .green
              }
              blue={
                typesColor.find((x) => x.name === type.pokemon_v2_type.name)
                  .blue
              }
              key={index}
            >
              {type.pokemon_v2_type.name}
            </TypeCard>
          ))}
        </div>
        <span className="owned">
          Owned:
          {isFoundName
            ? ` ${data.filter((x) => x.name === pokemon.name).length}`
            : " 0"}
        </span>
      </div>
      <Link
        href={`/pokemons/${pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}/${pokemon.name}`}
      >
        <a></a>
      </Link>
    </Card>
  );
};

export default PokemonCard;
