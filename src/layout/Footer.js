import styled from "@emotion/styled";
import React from "react";

const FooterContainer = styled.footer`
  background-color: #e7e7e7;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  .set-width {
    font-size: 11px;
    opacity: 0.6;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="set-width">@all rights reserved - Pokegame 2022</div>
    </FooterContainer>
  );
};

export default Footer;
