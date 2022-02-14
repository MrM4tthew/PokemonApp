import styled from "@emotion/styled";
import React from "react";

const BannerContainer = styled.div`
  width: 100%;
  height: 254px;
  background-image: linear-gradient(to right, #ffefba, #ffffff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  /* border-radius: 25px; */
  border-radius: 10px;
  margin-bottom: 16px;
`;

const InfoBanner = () => {
  return <BannerContainer></BannerContainer>;
};

export default InfoBanner;
