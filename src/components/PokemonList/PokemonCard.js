import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Card = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px 18px;
  margin: 0px 10px 10px 0px;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  background-color: rgba(190, 249, 131, 0.5);

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
      .type-card {
        background-color: lightgray;
        padding: 5px 7px;
        border-radius: 8px;
        font-size: 10px;

        &:first-child {
          margin-right: 5px;
        }
      }
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

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt=""
      />
      <span className="name">{pokemon.name}</span>
      <div className="short-info-container">
        <div className="types">
          {pokemon.pokemon_v2_pokemontypes.map((type) => (
            <div className="type-card">{type.pokemon_v2_type.name}</div>
          ))}
        </div>
        <span className="owned">Owned: 0</span>
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
