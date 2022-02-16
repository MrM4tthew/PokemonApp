import React, { useContext } from "react";
import styled from "@emotion/styled";
import { CatchContext } from "../../../context/CatchContext";
import { disableBodyScroll } from "body-scroll-lock";
import { screenSize } from "../../../styles/screenSize";

const ContentCTR = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;

  .owned-pokemon-container {
    margin-bottom: 40px;
    .title-container {
      display: flex;
      margin-bottom: 15px;
      h2 {
        margin: 0px;
      }

      &.owned {
        align-items: center;
        @media (max-width: ${screenSize.mobile}) {
          justify-content: space-between;
        }
        .title {
          margin-right: 10px;
        }
        button {
          background-color: rgba(255, 28, 28, 1);
          color: white;
          height: 35px;
          width: 100px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          border: none;
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          opacity: 1;
          transition: opacity 100ms ease-in-out;

          &:hover {
            opacity: 0.85;
          }
        }
      }

      &.empty {
        flex-direction: column;

        .subtitle {
          font-size: 14px;
          opacity: 0.4;
        }
      }
    }

    .cards-container {
      display: grid;
      flex-wrap: wrap;
      grid-template-columns: 19.4% 19.4% 19.4% 19.4% 19.4%;
      column-gap: 0.75%;
      row-gap: 7px;

      @media (max-width: ${screenSize.tablet}) {
        grid-template-columns: 24.4375% 24.4375% 24.4375% 24.4375%;
      }

      @media (max-width: ${screenSize.almostMobile}) {
        grid-template-columns: 32.3% 32.3% 32.3%;
      }

      @media (max-width: ${screenSize.mobile}) {
        grid-template-columns: 48.5% 48.5%;
        column-gap: 7px;
      }
      .card {
        width: 100%;
        height: 180px;
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        background-color: white;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
      }

      .empty {
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 1;
        transition: opacity 80ms ease-in-out;

        &:hover {
          opacity: 0.5;
        }
      }

      .owned {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .pokemonImage {
          width: 95px;
          height: 95px;
        }
        .nickname {
          font-size: 14px;
          font-weight: 500;
          opacity: 0.8;
        }

        .name {
          font-size: 13px;
          opacity: 0.5;
        }
      }
    }
  }

  .moves-container {
    .moves-list {
      display: flex;
      flex-wrap: wrap;
      .move-card {
        background-color: #dddddd;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #818181;
        border-radius: 8px;
        padding: 10px 15px;
        font-size: 10px;
        margin: 0px 3px 3px 0px;
      }
    }
  }
`;

const ContentContainer = ({ pokemonData }) => {
  const { data, catchPokemon } = useContext(CatchContext);

  const isFound = data.some((e) => {
    if (e.name === pokemonData.name) {
      return true;
    }
  });

  return (
    <ContentCTR>
      <div className="owned-pokemon-container">
        {isFound ? (
          <div className="title-container owned">
            <h2 className="title">Owned Pokemon</h2>
            <button
              onClick={() => {
                catchPokemon();
                disableBodyScroll(document);
              }}
            >
              Catch
            </button>
          </div>
        ) : (
          <div className="title-container empty">
            <h2 className="title">Owned Pokemon</h2>
            <span className="subtitle">
              Looks like you have not have {pokemonData.name} in your
              collection, catch em now!!!
            </span>
          </div>
        )}

        <div className="cards-container">
          {isFound ? (
            data
              .filter((x) => x.name == pokemonData.name)
              .map((item, index) => (
                <div className="card owned" key={index}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokemonId}.png`}
                    className="pokemonImage"
                    alt=""
                  />
                  <span className="nickname">{item.nickname}</span>
                  <span className="name">{item.name}</span>
                </div>
              ))
          ) : (
            <div
              className="card empty"
              onClick={() => {
                catchPokemon();
                disableBodyScroll(document);
              }}
            >
              <img src="/add.svg" alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="moves-container">
        <h2 className="title">List of Moves</h2>
        <div className="moves-list">
          {pokemonData.pokemon_v2_pokemonmoves.map((move, index) => (
            <div className="move-card" key={index}>
              {move.pokemon_v2_move.name.replace(/-/g, " ")}
            </div>
          ))}
        </div>
      </div>
    </ContentCTR>
  );
};

export default ContentContainer;
