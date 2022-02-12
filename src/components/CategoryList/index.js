import styled from "@emotion/styled";
import React from "react";
import TypeCard from "./TypeCard";

const TypesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 200px 0px;
`;

const index = ({ types }) => {
  return (
    <div>
      <TypesContainer>
        {types.map((type, index) => (
          <TypeCard type={type} key={index} />
        ))}
      </TypesContainer>
    </div>
  );
};

export default index;
