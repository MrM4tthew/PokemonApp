import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";
import PokemonForm from "../components/PokemonForm";
import { CatchContext } from "../../context/CatchContext";

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
  background-color: lightblue;
  width: 100%;
  height: 150px;
`;

const PokemonStoreContainer = styled.div`
  position: absolute;
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

  .pokemon-flee-message {
    background-color: white;
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const index = ({ children, bannercolor }) => {
  const { status, closePokemonRunForm } = useContext(CatchContext);
  return (
    <>
      {status ? (
        <PokemonStoreContainer>
          <PokemonForm />
        </PokemonStoreContainer>
      ) : status == false ? (
        <PokemonStoreContainer>
          <div className="pokemon-flee-message">
            <span>pokemon run away</span>
            <button onClick={closePokemonRunForm}>Try again</button>
          </div>
        </PokemonStoreContainer>
      ) : (
        ""
      )}
      <Header />
      <PageContainer>
        {bannercolor ? <ColorBanner /> : ""}
        <div className="page-box set-width">{children}</div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default index;
