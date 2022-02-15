import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  /* background-color: white; */
  /* background-color: #3b4cca; */
  background-color: #ffde00;

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 35px;
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
        <img src="/pokemonLogo.svg" alt="" />
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
