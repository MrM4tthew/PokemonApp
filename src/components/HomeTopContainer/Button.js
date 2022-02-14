import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";

const dynamicStyle = (props) => css`
  background-color: ${props.color};
`;

const ActionButton = styled.a`
  ${dynamicStyle}
  width: 49.5%;
  height: 132px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
`;

const Button = ({ name, color, link }) => {
  return (
    <Link href={link}>
      <ActionButton color={color}>{name}</ActionButton>
    </Link>
  );
};

export default Button;
