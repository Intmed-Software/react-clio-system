import React from "react";
import { AiOutlineClose, AiOutlineWarning } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { FaCheckCircle, FaInfoCircle } from "../Icons";
import { Typography } from "../Typography";
import { AlertContainer, BaseAlert, CloseIcon } from "./styles";
import { AlertProps } from "./types";

const iconOptions = {
  success: <FaCheckCircle />,
  error: <MdErrorOutline />,
  warning: <AiOutlineWarning />,
  info: <FaInfoCircle />,
  dark: <FaInfoCircle />,
  light: <FaInfoCircle />,
};

export function Alert(props: AlertProps) {
  return (
    <BaseAlert {...props}>
      <AlertContainer>
        {iconOptions[props.variant]}
        <Typography>{props.message}</Typography>
        {props.onClose ? (
          <CloseIcon {...props} onClick={props.onClose}>
            <AiOutlineClose />
          </CloseIcon>
        ) : null}
      </AlertContainer>
    </BaseAlert>
  );
}
