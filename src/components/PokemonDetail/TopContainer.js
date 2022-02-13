import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { CatchContext } from "../../../context/CatchContext";

const TopCTNR = styled.div`
  display: flex;
  position: relative;
  top: -50px;

  .circle-image {
    width: 130px;
    height: 130px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    z-index: 5;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  }

  .name-info-container {
    display: flex;
    flex-direction: column;
    z-index: 4;

    .name-container {
      display: flex;
      background-color: white;
      padding: 10px 20px 10px 80px;
      border-radius: 8px;

      position: absolute;
      left: 60px;

      .name {
        font-size: 35px;
        font-weight: 600;
        margin-right: 10px;
      }

      .types-container {
        display: flex;
        align-items: center;

        .type-card {
          background-color: lightgray;
          padding: 6px 10px;
          font-size: 11px;
          border-radius: 7px;
          &:first-child {
            margin-right: 5px;
          }
        }
      }
    }

    .catch-btn {
      position: absolute;
      bottom: 0;
      margin-left: 20px;
      background-color: #ff1c1c;
      color: white;
      border: none;
      width: 113px;
      height: 41px;
      font-size: 15px;
      font-weight: 500;
      border-radius: 7px;
    }
  }
`;

const TopContainer = ({ data }) => {
  const { catchPokemon, setPokemon, status, pokemon } =
    useContext(CatchContext);

  useEffect(() => {
    if (status) {
      setPokemon(data);
    }
  }, [status]);

  return (
    <TopCTNR>
      <div className="circle-image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt=""
        />
      </div>
      <div className="name-info-container">
        <div className="name-container">
          <span className="name">{data.name}</span>
          <div className="types-container">
            {data.pokemon_v2_pokemontypes.map((type, index) => (
              <div className="type-card" key={index}>
                {type.pokemon_v2_type.name}
              </div>
            ))}
          </div>
        </div>
        <button className="catch-btn" onClick={catchPokemon}>
          Catch
        </button>
      </div>
    </TopCTNR>
  );
};

export default TopContainer;
