import { BreakpointsEnum } from "@shared/consts/types";
import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <Root>VERTIGO</Root>;
};

const Root = styled.div`
  font-family: "CygreBlack";
  font-weight: 900;
  font-size: 36px;
  color: #282828;
  @media (max-width: ${BreakpointsEnum.sm}px) {
    /* font-size: 22px; */
  }
`;

export default Logo;
