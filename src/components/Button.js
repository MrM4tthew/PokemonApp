import { css } from "@emotion/react";
import styled from "@emotion/styled";

// const dynamicStyles = (props) => {
//   css`
//     background-color: ${props.colorbackground};
//   `;
// };

const ButtonContainer = styled.a`
  text-decoration: none;
  width: 300px;
  height: 150px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${(props) => (props.primary ? "red" : "yellow")};
`;

const Button = ({ name, type }) => {
  return <ButtonContainer>{name}</ButtonContainer>;
};

export default Button;
