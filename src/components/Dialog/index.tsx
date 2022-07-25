import React, { PropsWithChildren } from "react";
import { Container, FullScreen } from "./styles";
import { DialogProps } from "./types";

export function Dialog(props: PropsWithChildren<DialogProps>) {
  return (
    <FullScreen {...props}>
      <Container {...props}>{props.children}</Container>
    </FullScreen>
  );
}
