import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { typesColor } from "../../../src/info/typecolor";

// const dynamicStyle = (props) => css`
//   background-color: rgba(${props.red}, ${props.green}, ${props.blue}, 0.45);
// `;

const TypeCrd = styled.div`
  /* ${dynamicStyle} */
  background-color: #f0f0f0;
  height: 50px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 0px 8px 8px 0px;
  position: relative;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  opacity: 1;
  transition: opacity 100ms ease-in-out;

  &:hover {
    opacity: 0.5;
  }

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

const TypeCard = ({ type }) => {
  // const find = typesColor.find((x) => x.name === type.name);
  // const red = find.red;
  // const blue = find.blue;
  // const green = find.green;

  return (
    // <TypeCrd red={red} blue={blue} green={green}>
    <TypeCrd>
      <span>{type.name}</span>
      <Link href={`/pokemons/${type.name}`}>
        <a></a>
      </Link>
    </TypeCrd>
  );
};

export default TypeCard;
