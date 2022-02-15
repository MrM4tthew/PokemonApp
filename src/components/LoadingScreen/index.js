import styled from "@emotion/styled";
import React from "react";
import { screenSize } from "../../../styles/screenSize";

const LoadingScreen = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  @media (max-width: ${screenSize.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loadingScreenBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 23vh;
    left: 0;
    right: 0;

    @media (max-width: ${screenSize.mobile}) {
      position: initial;
      top: initial;
      left: initial;
      right: initial;
    }
    img {
      width: 500px;
      @media (max-width: ${screenSize.mobile}) {
        width: 100vw;
      }
    }
    .loader {
      margin-top: -35px;
      font-size: 18px;
      letter-spacing: 2.5px;
    }
    @keyframes blink {
      50% {
        color: transparent;
      }
    }
    .loader__dot {
      animation: 1s blink infinite;
    }
    .loader__dot:nth-child(2) {
      animation-delay: 250ms;
    }
    .loader__dot:nth-child(3) {
      animation-delay: 500ms;
    }
  }
`;

const index = () => {
  return (
    <LoadingScreen>
      <div className="loadingScreenBox">
        <img src="/pikachuAnimated.svg" alt="" />
        <div className="loader">
          Please Wait<span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
        </div>
      </div>
    </LoadingScreen>
  );
};

export default index;
