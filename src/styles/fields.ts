import { css } from "styled-components";
import colors from "../patters/colors";

interface FieldBasesProps {
  error: boolean;
}
export const FieldBases = ({ error }: FieldBasesProps) => css`
  border: 1px solid ${error ? colors.mediumError : colors.mediumGray};
  padding: 8px;
  width: 100%;
  background: ${colors.white};
  box-sizing: border-box;
  border-radius: 4px;
  color: ${colors.darkestGray};

  :disabled {
    background: ${colors.ice};
    color: ${colors.background};
  }
`;
