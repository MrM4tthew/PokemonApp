import styled from "@emotion/styled";
import { disableBodyScroll } from "body-scroll-lock";
import { useContext, useEffect } from "react";
import { CatchContext } from "../../../context/CatchContext";
import { screenSize } from "../../../styles/screenSize";

const TopCTNR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${screenSize.mobile}) {
    padding: 50px 0px 20px 0px;
  }
  /* top: -50px; */

  .set-width {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    @media (max-width: ${screenSize.mobile}) {
      flex-direction: column;
    }
  }

  img {
    @media (max-width: ${screenSize.mobile}) {
      width: 150px;
    }
  }

  .name-info-container {
    display: flex;
    flex-direction: column;

    .name-container {
      display: flex;
      padding: 0px 0px 0px 25px;
      border-radius: 8px;
      @media (max-width: ${screenSize.mobile}) {
        flex-direction: column;
        align-items: center;
        padding: initial;
      }

      .name {
        font-size: 40px;
        font-weight: 600;
        margin-right: 10px;
        @media (max-width: ${screenSize.mobile}) {
          font-size: 35px;
          margin-right: initial;
        }
      }

      .types-container {
        display: flex;
        align-items: center;
        @media (max-width: ${screenSize.mobile}) {
          margin-bottom: 20px;
        }

        .type-card {
          background-color: lightgray;
          padding: 6px 10px;
          font-size: 11px;
          border-radius: 7px;
          box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.15);
          &:first-of-type {
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

  .stats-container {
    margin-left: auto;
    background-color: white;
    width: 330px;
    padding: 13px 20px;
    box-sizing: border-box;
    border-radius: 8px;

    @media (max-width: ${screenSize.tablet}) {
      display: none;
    }
    @media (max-width: ${screenSize.mobile}) {
      display: block;
      margin-left: initial;
      width: 100%;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
      opacity: 0.8;
    }
    .stats {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .stat {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 125px;

        span {
          font-size: 11px;
          opacity: 0.7;
        }
      }
    }
  }
`;

const TopContainer = ({ data }) => {
  const { catchPokemon, setPokemon, status } = useContext(CatchContext);

  useEffect(() => {
    if (status) {
      setPokemon(data);
    }
  }, [status]);

  return (
    <TopCTNR>
      <div className="set-width">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt="pokemon"
        />

        <div className="name-info-container">
          <div className="name-container">
            <span title="name" className="name">
              {data.name}
            </span>
            <div className="types-container">
              {data.pokemon_v2_pokemontypes.map((type, index) => (
                <div title="pokemon-type" className="type-card" key={index}>
                  {type.pokemon_v2_type.name}
                </div>
              ))}
            </div>
          </div>
          {/* <button
            className="catch-btn"
            onClick={() => {
              catchPokemon();
              disableBodyScroll(document);
            }}
          >
            Catch
          </button> */}
        </div>

        <div className="stats-container">
          <span className="title">Base Stats</span>
          <div className="stats">
            {data.pokemon_v2_pokemonstats.map((stat, index) => (
              <div className="stat" key={index}>
                <span>{stat.pokemon_v2_stat.name.replace(/-/g, " ")}</span>
                <span>{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TopCTNR>
  );
};

export default TopContainer;
