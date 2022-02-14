import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";
import InfoBanner from "./InfoBanner";
import { screenSize } from "../../../styles/screenSize";

const ActionBTNData = [
  {
    name: "Find Pokemon",
    color: "#76B852",
    link: "/pokemons",
  },
  {
    name: "My Pokemon",
    color: "#F00000",
    link: "/mylist",
  },
];

const Topcontainer = styled.div`
  margin: 30px 0px 100px 0px;
  display: flex;
  flex-direction: column;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  /* @media (max-width: ${screenSize.mobile}) {
    flex-direction: column;
    height: 280px;
  } */
`;

const index = () => {
  return (
    <Topcontainer>
      <InfoBanner />
      <ActionButtonContainer>
        {ActionBTNData.map((data) => (
          <Button name={data.name} color={data.color} link={data.link} />
        ))}
      </ActionButtonContainer>
    </Topcontainer>
  );
};

export default index;
