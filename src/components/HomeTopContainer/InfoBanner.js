import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { screenSize } from "../../../styles/screenSize";

const BannerContainer = styled.div`
  width: 100%;
  height: 254px;
  background-image: linear-gradient(to right, #ffefba, #ffffff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  /* border-radius: 25px; */
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 20px 40px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${screenSize.almostMobile}) {
    padding: 10px 20px;
    height: 200px;
  }
  @media (max-width: ${screenSize.smallMobile}) {
    height: 180px;
  }

  .bannerInfo {
    display: flex;
    flex-direction: column;
    .subtitle {
      font-size: 14px;
      margin-bottom: -5px;
      @media (max-width: 725px) {
        font-size: 12px;
      }
      @media (max-width: ${screenSize.smallMobile}) {
        font-size: 10px;
      }
    }

    .title {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 8px;
      @media (max-width: 725px) {
        font-size: 23px;
      }
      @media (max-width: ${screenSize.smallMobile}) {
        font-size: 20px;
      }
    }

    a {
      width: 130px;
      height: 40px;
      font-size: 12px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #b80f0a;
      color: white;
      @media (max-width: 725px) {
        font-size: 11px;
        width: 120px;
        height: 38px;
      }
      @media (max-width: ${screenSize.smallMobile}) {
        font-size: 10px;
      }
    }
  }

  img {
    width: 250px;
    @media (max-width: 725px) {
      width: 150px;
    }
    @media (max-width: ${screenSize.almostMobile}) {
      display: none;
    }
  }
`;

const InfoBanner = () => {
  return (
    <BannerContainer>
      <div className="bannerInfo">
        <span className="subtitle">The first web based</span>
        <span className="title">Pokemon Catching Game</span>
        <Link href="/pokemons">
          <a>Play Now</a>
        </Link>
      </div>
      <img src="/charizard.png" alt="" />
    </BannerContainer>
  );
};

export default InfoBanner;
