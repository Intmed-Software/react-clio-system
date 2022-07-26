import styled, { css } from "styled-components";
import colors from "../../patters/colors";
import sizes from "../../patters/sizes";
import weights from "../../patters/weights";
import { MainFont } from "../../styles/mixins";
import { TypographyProps } from "./types";

export const ColorProperties = ({ color }: TypographyProps) => css`
  color: ${colors[color]};
`;
export const Text = styled.span<TypographyProps>`
  ${MainFont()}
  ${(props) => (props.color ? ColorProperties(props) : null)}
  font-size: ${(props) => (props.size ? sizes[props.size] : sizes.medium)};
  font-weight: ${(props) =>
    props.weight ? weights[props.weight] : weights.regular};
`;
