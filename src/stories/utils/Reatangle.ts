import styled from "styled-components";
import colors from "../../patters/colors";
interface RetangleProps {
  width?: number;
  height?: number;
  background?: string;
}

export const Rectangle = styled.div<RetangleProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.background};
  border: 1px solid ${colors.darkGray};
  padding: 8px;
`;

export const RectangleDescription = styled.div<RetangleProps>`
  width: ${(props) => props.width}px;
  padding: 8px;
  border: 1px solid ${colors.darkGray};
  margin-bottom: 20px;
`;
