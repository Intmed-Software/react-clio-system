import React from "react";

import { Typography } from "../Typography";
import { TagProps } from "./types";
import { Container } from "./styles";

export function Tag({ color, size, text, icon, ...rest }: TagProps) {
  return (
    <Container color={color} size={size} {...rest}>
      {icon}
      <Typography weight="bold" size={size === "display" ? "small" : "xs"}>
        {text}
      </Typography>
    </Container>
  );
}
