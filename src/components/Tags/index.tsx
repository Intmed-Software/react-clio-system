import React from "react";

import { Typography } from "../Typography";
import { FaHeart } from "../Icons";
import { TagsProps } from "./types";
import { Container, IconContainer } from "./styles";

export function Tags({ color, size, text, icon, ...rest }: TagsProps) {
  return (
    <Container color={color} size={size} icon={icon} {...rest}>
      {icon ? (
        <IconContainer>
          <FaHeart size={size === "display" ? 12 : 10} />
        </IconContainer>
      ) : null}
      <Typography weight="bold" size={size === "display" ? "small" : "xs"}>
        {text}
      </Typography>
    </Container>
  );
}
