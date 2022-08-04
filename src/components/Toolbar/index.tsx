import React from "react";
import { ThemeProvider } from "styled-components";
import { Typography } from "../Typography";
import {
  ContainerVersion, InfoContainer,
  ItensContainer, ToolbarContainer,
  VerticalLine
} from "./style";
import { ToolbarProps } from "./types";

export function Toolbar({
  logo,
  headerItens,
  branchName,
  version = "1.0",
  theme = "dark",
}: ToolbarProps) {
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <ToolbarContainer>
        <InfoContainer>
          {logo}
          <ContainerVersion>
            <Typography size="xxs" weight="regular">
              V.{version}
            </Typography>
          </ContainerVersion>
          <VerticalLine />
          <Typography size="small" weight="regular">
            {branchName}
          </Typography>
        </InfoContainer>
        <ItensContainer>{headerItens}</ItensContainer>
      </ToolbarContainer>
    </ThemeProvider>
  );
}
