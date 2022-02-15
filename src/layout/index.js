import React, { useContext } from "react";
import { enableBodyScroll } from "body-scroll-lock";
import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";
import PokemonForm from "../components/PokemonForm";
import PokemonFleeMsg from "../components/PokemonFleeMsg";
import { CatchContext } from "../../context/CatchContext";
import TopContainer from "../components/PokemonDetail/TopContainer";
import { screenSize } from "../../styles/screenSize";
import { css } from "@emotion/react";

const dynamicStyle = (props) => css`
  background-color: rgba(${props.red}, ${props.green}, ${props.blue}, 0.18);
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-box {
    position: relative;
  }
`;

const ColorBanner = styled.div`
  ${dynamicStyle}
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${screenSize.tablet}) {
    height: auto;
  }
`;

const PokemonCatchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteOwnedPokemonFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  .deletepokemon-box {
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
      }

      .cancel {
        color: rgba(0, 0, 0, 0.6);
      }

      .delete {
        background-color: #e50202;
        color: white;
      }
    }
  }
`;

const index = ({ children, bannercolor, detailData, red, blue, green }) => {
  const {
    status,
    dltStatus,
    nickname,
    deletePokemon,
    closeOwnedPokemonDeleteForm,
  } = useContext(CatchContext);
  return (
    <>
      {status ? (
        <PokemonCatchContainer>
          <PokemonForm />
        </PokemonCatchContainer>
      ) : status == false ? (
        <PokemonCatchContainer>
          <PokemonFleeMsg />
        </PokemonCatchContainer>
      ) : (
        ""
      )}

      {dltStatus ? (
        <DeleteOwnedPokemonFormContainer>
          <div className="deletepokemon-box">
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
          </div>
        </DeleteOwnedPokemonFormContainer>
      ) : (
        ""
      )}

      <Header />
      <PageContainer>
        {bannercolor ? (
          <ColorBanner red={red} blue={blue} green={green}>
            <TopContainer data={detailData} />
          </ColorBanner>
        ) : (
          ""
        )}
        <div className="page-box set-width">{children}</div>
      </PageContainer>
      {/* <Footer /> */}
    </>
  );
};

export default index;
