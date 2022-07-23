import styled, { css } from "styled-components";
import colors from "../../patters/colors";
import { AlertProps } from "./types";

export const VariantAlertProperties = (background, color) => css`
  background: ${background};
  color: ${color};
`;

export const HelperIconProperties = (color) => css`
  svg {
    color: ${color};
  }
`;
const variants = {
  success: VariantAlertProperties(colors.lightSuccess, colors.black),
  error: VariantAlertProperties(colors.lightError, colors.black),
  warning: VariantAlertProperties(colors.lightAlert, colors.black),
  info: VariantAlertProperties(colors.lighterBlue, colors.black),
  dark: VariantAlertProperties(colors.black, colors.white),
  light: VariantAlertProperties(colors.white, colors.black),
};

const iconColors = {
  success: HelperIconProperties(colors.mediumSuccess),
  error: HelperIconProperties(colors.mediumError),
  warning: HelperIconProperties(colors.mediumAlert),
  info: HelperIconProperties(colors.mediumBlue),
  dark: HelperIconProperties(colors.white),
  light: HelperIconProperties(colors.darkGray),
};

export const BaseAlert = styled.div<AlertProps>`
  padding: 16px;
  text-align: left;
  font-size: 17px;
  box-shadow: 0px 1px 4px rgba(39, 50, 63, 0.16);
  border-radius: 4px;
  ${(props) => variants[props.variant]}
  ${(props) => iconColors[props.variant]}
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const CloseIcon = styled.div<AlertProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    color: ${(props) =>
      props.variant === "dark" ? colors.white : colors.black} !important;
  }
`;
