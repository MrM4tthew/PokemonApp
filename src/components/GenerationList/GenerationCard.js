import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const GenerationCrd = styled.div`
  background-color: #f0f0f0;
  height: 50px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 0px 8px 8px 0px;
  position: relative;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  span {
    font-size: 12px;
    opacity: 0.6;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
`;

const GenerationCard = ({ generation }) => {
  const name = generation.name.replace(/-/g, " ");

  return (
    <GenerationCrd>
      <span>{name}</span>
      {/* <Link href={`/pokemons/${type.name}`}>
        <a></a>
      </Link> */}
    </GenerationCrd>
  );
};

export default GenerationCard;
