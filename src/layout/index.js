import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const index = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>
        <div className="page-box set-width">{children}</div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default index;
