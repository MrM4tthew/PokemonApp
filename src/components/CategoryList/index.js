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
  margin: 50px 0px;
`;

const index = ({ types }) => {
  return (
    <TypesContainer>
      <span className="container-title">Pokemon Types</span>
      <TypesList>
        {types.map((type, index) => (
          <TypeCard type={type} key={index} />
        ))}
      </TypesList>
    </TypesContainer>
  );
};

export default index;
