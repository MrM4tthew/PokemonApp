import React, { useContext } from "react";
import { enableBodyScroll } from "body-scroll-lock";
import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";
import PokemonForm from "../components/PokemonForm";
import PokemonFleeMsg from "../components/PokemonFleeMsg";
import { CatchContext } from "../../context/CatchContext";
import TopContainer from "../components/PokemonDetail/TopContainer";
import DeleteOwnedPokemonForm from "../components/DeleteOwnedPokemonForm";
import { screenSize } from "../../styles/screenSize";
import { css } from "@emotion/react";
import Head from "next/head";

const dynamicStyle = (props) => css`
  background-color: rgba(${props.red}, ${props.green}, ${props.blue}, 0.18);
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

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
`;

const index = ({
  children,
  bannercolor,
  detailData,
  red,
  blue,
  green,
  page,
}) => {
  const { status, dltStatus } = useContext(CatchContext);
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
          <DeleteOwnedPokemonForm />
        </DeleteOwnedPokemonFormContainer>
      ) : (
        ""
      )}

      <Header />
      <PageContainer>
        <Head>
          <title>Pokegame - {page}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {bannercolor ? (
          <ColorBanner red={red} blue={blue} green={green}>
            <TopContainer data={detailData} />
          </ColorBanner>
        ) : (
          ""
        )}
        <div className="page-box set-width">{children}</div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default index;
