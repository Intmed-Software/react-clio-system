import React from "react";
import { Alert } from "../Alets";
import { useToast } from "./Context";
import { ToastContainer } from "./styles";
import { ToastProps } from "./types";
export function Toast(props: ToastProps) {
  const { close } = useToast();
  return (
    <ToastContainer {...props}>
      <Alert {...props} onClose={props.showCloseButon ? () => close() : null} />
    </ToastContainer>
  );
}
