import styled from "@emotion/styled";
import React from "react";
import TypeCard from "./TypeCard";

const TypesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;

  .container-title {
    margin-bottom: 0px;
  }

  .subtitle {
    font-size: 14px;
    opacity: 0.6;
    margin-bottom: 15px;
  }
`;

const index = ({ types }) => {
  return (
    <TypesContainer>
      <span className="container-title">Pokemon Types</span>
      <span className="subtitle">
        Pokemon collection based on element types
      </span>
      <TypesList>
        {types.map((type, index) => (
          <TypeCard type={type} key={index} />
        ))}
      </TypesList>
    </TypesContainer>
  );
};

export default index;
