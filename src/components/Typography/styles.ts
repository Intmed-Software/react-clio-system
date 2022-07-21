import styled from "styled-components";
import colors from "../../patters/colors";
import sizes from "../../patters/sizes";
import weights from "../../patters/weights";
import { TypographyProps } from "./types";

export const Text = styled.span<TypographyProps>`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  font-family: "Inter", sans-serif;
  color: ${(props) => (props.color ? colors[props.color] : colors.black)};
  font-size: ${(props) => (props.size ? sizes[props.size] : sizes.medium)};
  font-weight: ${(props) =>
    props.weight ? weights[props.weight] : weights.regular};
`;
