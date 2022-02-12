import { Global, css } from "@emotion/react";

const GlobalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  body {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    padding: 0;
  }

  .set-width {
    max-width: 1000px;
    width: calc(100vw - 200px);
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={GlobalCSS} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
