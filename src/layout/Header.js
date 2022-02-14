import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 255, 0.2);
  background-color: white;

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 300px;

    a {
      font-size: 15px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-box set-width">
        <ul>
          <li>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={`/pokemons`}>
              <a>Pokemons</a>
            </Link>
          </li>
          <li>
            <Link href={`/mypokemon`}>
              <a>My Pokemon</a>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
