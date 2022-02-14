import React, { useContext } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { typesColor } from "../../../src/info/typecolor";
import { css } from "@emotion/react";
import { CatchContext } from "../../../context/CatchContext";

const dynamicStyle = (props) => css`
  background-color: rgba(${props.red}, ${props.green}, ${props.blue}, 0.18);
`;
const dynamicStyle2 = (props) => css`
  background-color: rgba(${props.red}, ${props.green}, ${props.blue}, 1);
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px 18px;
  margin: 0px 10px 10px 0px;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  /* background-color: rgba(190, 249, 131, 0.5); */
  ${dynamicStyle}

  img {
  }

  .name {
    font-size: 18px;
  }

  .short-info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .types {
      display: flex;
      align-items: center;
    }

    .owned {
      font-size: 14px;
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

  &:first-of-type {
    margin-right: 5px;
  }
`;

const PokemonCard = ({ pokemon }) => {
  const { data } = useContext(CatchContext);

  // Check pokemon name in local storage
  const isFoundName = data.some((e) => {
    if (e.name === pokemon.name) {
      return true;
    }
  });

  // Types color identification
  const find = typesColor.find(
    (x) => x.name === pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
  );
  const red = find.red;
  const blue = find.blue;
  const green = find.green;

  return (
    <Card red={red} blue={blue} green={green}>
      {/* <Card> */}
      <LazyLoad height={400}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt=""
        />
      </LazyLoad>

      <span className="name">{pokemon.name}</span>
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
