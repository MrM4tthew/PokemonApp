import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-box {
    position: relative;
  }
`;

const ColorBanner = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 150px;
`;

const index = ({ children, bannercolor }) => {
  return (
    <>
      <Header />
      <PageContainer>
        {bannercolor ? <ColorBanner /> : ""}
        <div className="page-box set-width">{children}</div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default index;
