import styled from "styled-components";
import colors from "../../patters/colors";
import { ButtonProps } from "./types";

const backGround = {
  outlined: colors.transparent,
  text: colors.transparent,
  contained: colors.mainBlue,
};

const borderColor = {
  outlined: colors.mainBlue,
  text: colors.transparent,
  contained: colors.mainBlue,
};

export const ElementButton = styled.button<ButtonProps>`
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  background-color: ${(props) => backGround[props.variant]};
  border: 1px solid ${(props) => borderColor[props.variant]};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.469rem 1rem; // 7.5px  16px
  outline: none;
  position: relative;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
  }

  :hover {
    background-color: ${colors.accentBlue};
    transition: 0.3s;
    color: ${colors.mainBlue};
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  left: calc(50% - 7.5px);
  top: calc(50% - 7.5px);
  width: 100%;
  height: 100%;
`;

export const ButtonContent = styled.span<ButtonProps>((props) => ({
  visibility: props.loading ? "hidden" : "visible",
  opacity: props.loading ? 0 : 1,
  display: "flex",
  columnGap: "8px",
}));
