import styled from "@emotion/styled";
import { enableBodyScroll } from "body-scroll-lock";
import React, { useContext } from "react";
import { CatchContext } from "../../../context/CatchContext";

const PokemonFleeContainer = styled.div`
  background-color: white;
  width: 300px;
  height: 150px;
  box-sizing: border-box;
  padding: 21px 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .topContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    img {
      width: 45px;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      opacity: 0.8;
    }
  }

  .bottomContainer {
    width: 100%;
    button {
      width: 100%;
      height: 45px;
      border: none;
      font-size: 15px;
      font-weight: 500;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
    }
  }
`;

const Index = () => {
  const { closePokemonRunForm } = useContext(CatchContext);
  return (
    <PokemonFleeContainer>
      <div className="topContainer">
        <img src="/sadFace.svg" alt="" />
        <span className="title">Pokemon Runaway</span>
      </div>
      <div className="bottomContainer">
        <button
          onClick={() => {
            closePokemonRunForm();
            enableBodyScroll(document);
          }}
        >
          Try again
        </button>
      </div>
    </PokemonFleeContainer>
  );
};

export default Index;
