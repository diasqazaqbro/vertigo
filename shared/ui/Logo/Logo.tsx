import { BreakpointsEnum } from "@shared/consts/types";
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

const Logo = () => {
  const { t } = useTranslation("common");

  return <Root>{t("name")}</Root>;
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
