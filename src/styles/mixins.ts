import { css } from "styled-components";
import colors from "../patters/colors";

export const MainFont = () => css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  font-family: "Inter", sans-serif;
`;

interface FieldBasesProps {
  error: boolean;
}
export const FieldBases = ({ error }: FieldBasesProps) => css`
  ${MainFont()}
  border: 1px solid ${error ? colors.mediumError : colors.mediumGray};
  width: 100%;
  background: ${colors.white};
  box-sizing: border-box;
  border-radius: 4px;
  color: ${colors.darkestGray};

  :disabled {
    background: ${colors.mediumGray};
    color: ${colors.lightestGray};
  }
`;

