import Link from "next/link";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { screenSize } from "../../styles/screenSize";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRouter } from "next/router";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: #ffde00;
  position: sticky;
  top: 0;
  z-index: 98;
  height: 60px;

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .websiteLogo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 113px;
    img {
      width: 130px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 260px;
    margin: 0;
    @media (max-width: ${screenSize.almostMobile}) {
      display: none;
    }

    a {
      font-size: 12.5px;
      letter-spacing: 0.5px;
      font-weight: 500;
      opacity: 0.7;
      transition: opacity 80ms ease-in-out;

      &:hover {
        opacity: 0.5;
      }

      &.active {
        opacity: 0.3;
        pointer-events: none;
      }
    }
  }

  .hamburgerButton {
    display: none;
    @media (max-width: ${screenSize.almostMobile}) {
      display: block;
    }
    .hamburger .line {
      width: 50px;
      height: 5px;
      background-color: #2e2e2e;
      border-radius: 10px;
      display: block;
      margin: 8px auto;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    .hamburger:hover {
      cursor: pointer;
    }

    .hamburger.is-active .line:nth-child(2) {
      opacity: 0;
    }

    .hamburger.is-active .line:nth-child(1) {
      -webkit-transform: translateY(13px) rotate(45deg);
      -ms-transform: translateY(13px) rotate(45deg);
      -o-transform: translateY(13px) rotate(45deg);
      transform: translateY(13px) rotate(45deg);
    }

    .hamburger.is-active .line:nth-child(3) {
      -webkit-transform: translateY(-13px) rotate(-45deg);
      -ms-transform: translateY(-13px) rotate(-45deg);
      -o-transform: translateY(-13px) rotate(-45deg);
      transform: translateY(-13px) rotate(-45deg);
    }
  }

  .mobileMenuContainer {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    box-sizing: border-box;
    display: none;

    @media (max-width: ${screenSize.almostMobile}) {
      height: calc((100vh - 60px) - calc(100vh - 100%));
    }

    &.is-active {
      display: none;
      @media (max-width: ${screenSize.almostMobile}) {
        display: block;
      }

      /* .mobileMenuContainerInside {
        opacity: 1;
      } */
    }

    .mobileMenuContainerInside {
      background-color: white;
      padding: 40px 0px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: calc(100vh - 60px);
      opacity: 0;
      transition: opacity 200ms ease-in-out;

      @media (max-width: ${screenSize.almostMobile}) {
        height: calc((100vh - 60px) - calc(100vh - 100%));
      }

      &.is-active {
        opacity: 1;
      }
    }

    .mobileMenuBox {
      /* opacity: 0; */
      transition: opacity 250ms ease-in-out;
      transition-delay: 150ms;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: 250px;

        a {
          font-size: 30px;
          letter-spacing: 1.5px;
          opacity: 1;
          transition: opacity 80ms ease-in-out;

          &:hover {
            opacity: 0.7;
          }

          &.active {
            opacity: 0.4;
            pointer-events: none;
          }
        }
      }

      .copyright {
        font-size: 12px;
        opacity: 0.5;
      }
    }
  }
`;

const menuData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Pokemons",
    link: "/pokemons",
  },
  {
    name: "My Pokemon",
    link: "/mypokemon",
  },
];

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [innerMenuState, setInnerMenuState] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  return (
    <HeaderContainer>
      <div className="header-box set-width">
        <div className="websiteLogo">
          <img src="/pokegame.png" alt="" />
        </div>
        <ul>
          {menuData.map((menu, index) => (
            <li key={index}>
              <Link href={menu.link}>
                <a className={router.pathname == menu.link ? "active" : ""}>
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="hamburgerButton"
          onClick={() => {
            setBurgerState(!burgerState);
            setMenuState(!menuState);
            setScroll(!scroll);
            setTimeout(() => setInnerMenuState(!innerMenuState), 100);

            if (scroll) {
              enableBodyScroll(document);
            } else {
              disableBodyScroll(document);
            }
          }}
        >
          <div className={burgerState ? "hamburger is-active" : "hamburger"}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div
          className={
            menuState ? "mobileMenuContainer is-active" : "mobileMenuContainer"
          }
        >
          <div
            className={
              innerMenuState
                ? "mobileMenuContainerInside is-active"
                : "mobileMenuContainerInside"
            }
          >
            <div className="mobileMenuBox set-width">
              <ul>
                {menuData.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.link}>
                      <a
                        onClick={() => {
                          setBurgerState(!burgerState);
                          setMenuState(!menuState);
                          setScroll(!scroll);
                          setTimeout(
                            () => setInnerMenuState(!innerMenuState),
                            100
                          );

                          if (scroll) {
                            enableBodyScroll(document);
                          } else {
                            disableBodyScroll(document);
                          }
                        }}
                        className={router.pathname == menu.link ? "active" : ""}
                      >
                        {menu.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="copyright">
                All Rights Reserved @2022 Pokegame
              </span>
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
