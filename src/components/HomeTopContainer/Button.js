import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { screenSize } from "../../../styles/screenSize";

const dynamicStyle = (props) => css`
  background-color: ${props.color};
`;

const ActionButton = styled.a`
  ${dynamicStyle}
  width: 49.5%;
  height: 132px;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 25px; */
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: ${screenSize.mobile}) {
    width: 48.5%;
    border-radius: 10px;
    font-size: 13px;
    height: 70px;
  }
  @media (max-width: ${screenSize.smallMobile}) {
    font-size: 13px;
  }
`;

const Button = ({ name, color, link }) => {
  return (
    <Link href={link}>
      <ActionButton color={color}>{name}</ActionButton>
    </Link>
  );
};

export default Button;
