import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CatchProvider } from "../context/CatchContext";
import LoadingScreen from "../src/components/LoadingScreen";

const GlobalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

  body {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    /* background-color: #fafafa; */
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
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 17px;
    opacity: 0.7;
  }
`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <CatchProvider>
      <Global styles={GlobalCSS} />
      {pageLoading ? <LoadingScreen /> : <Component {...pageProps} />}
    </CatchProvider>
  );
}

export default MyApp;
