import { Global, css } from "@emotion/react";
import { CatchProvider } from "../context/CatchContext";

const GlobalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  body {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: #fafafa;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    padding: 0;
  }

  .set-width {
    max-width: 900px;
    width: calc(100vw - 2rem);
  }

  .container-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 26px;
    opacity: 0.7;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <CatchProvider>
      <Global styles={GlobalCSS} />
      <Component {...pageProps} />
    </CatchProvider>
  );
}

export default MyApp;
