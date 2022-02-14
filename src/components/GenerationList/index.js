import styled from "@emotion/styled";
import React from "react";
import GenerationCard from "./GenerationCard";

const GenerationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GenerationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
`;

const index = ({ generations }) => {
  return (
    <GenerationsContainer>
      <span className="container-title">Pokemon Generations</span>
      <GenerationsList>
        {generations.map((generation, index) => (
          <GenerationCard generation={generation} key={index} />
        ))}
      </GenerationsList>
    </GenerationsContainer>
  );
};

export default index;
