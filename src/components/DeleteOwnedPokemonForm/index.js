import styled from "@emotion/styled";
import { enableBodyScroll } from "body-scroll-lock";
import React, { useContext } from "react";
import { CatchContext } from "../../../context/CatchContext";

const DeleteForm = styled.div`
  background-color: white;
  width: 350px;
  height: 166px;
  box-sizing: border-box;
  padding: 21px 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .topContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      opacity: 0.9;
    }

    .message-container {
      display: flex;
      flex-direction: column;

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
    display: flex;
    justify-content: space-between;

    button {
      width: 48.5%;
      height: 45px;
      border: none;
      font-size: 17px;
      font-weight: 500;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      cursor: pointer;
      opacity: 1;
      transition: opacity 80ms ease-in-out;

      &:hover {
        opacity: 0.5;
      }
    }

    .cancel {
      color: rgba(0, 0, 0, 0.6);
    }

    .delete {
      background-color: #e50202;
      color: white;
    }
  }
`;

const Index = () => {
  const { nickname, deletePokemon, closeOwnedPokemonDeleteForm } =
    useContext(CatchContext);
  return (
    <DeleteForm>
      <div className="topContainer">
        <img src="warningSign.svg" alt="" />
        <div className="message-container">
          <span className="title">REMOVE POKEMON</span>
          <div className="subtitle">This action cannot be undone.</div>
        </div>
      </div>
      <div className="bottomContainer">
        <button
          className="cancel"
          onClick={() => {
            closeOwnedPokemonDeleteForm();
            enableBodyScroll(document);
          }}
        >
          Cancel
        </button>
        <button
          className="delete"
          onClick={() => {
            deletePokemon(nickname);
            enableBodyScroll(document);
          }}
        >
          Delete
        </button>
      </div>
    </DeleteForm>
  );
};

export default Index;
