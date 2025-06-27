import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Html } from "next/document";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Root>
      <Header />
      <Content>{children}</Content>
    </Root>
  );
};

const Root = styled.div``;
const Content = styled.div`

  width: 100%;
`;

export default Layout;
