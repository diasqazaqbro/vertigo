"use client";

import { theme } from "@app/styles/themes";
import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemingProps {
  children: ReactNode;
}

export default function Theming({ children }: ThemingProps) {
  return (
    <StyledThemeProvider theme={theme.default}>{children}</StyledThemeProvider>
  );
}
