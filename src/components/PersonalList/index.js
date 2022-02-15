import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { screenSize } from "../../../styles/screenSize";
import OwnedPokemonCard from "./OwnedPokemonCard";

const PersonalList = styled.div`
  display: grid;
  /* grid-template-columns: 190px 190px 190px 190px; */
  grid-template-columns: 19.4% 19.4% 19.4% 19.4% 19.4%;
  margin: 20px 0px;
  column-gap: 0.75%;
  position: relative;

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

  .empty-message {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    img {
      width: 50px;
      margin-bottom: 15px;
    }

    span {
      font-size: 17px;
      opacity: 0.7;
      font-weight: 500;
    }
  }
`;

const index = ({ data }) => {
  return (
    <PersonalList>
      {data == "" ? (
        <div className="empty-message">
          <img src="/emptybag.svg" alt="" />
          <span>No pokemon in your collection</span>
        </div>
      ) : (
        data.map((item, index) => <OwnedPokemonCard item={item} key={index} />)
      )}
    </PersonalList>
  );
};

export default index;
