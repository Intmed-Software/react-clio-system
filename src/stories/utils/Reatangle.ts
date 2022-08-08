import styled from "styled-components";

interface RetangleProps {
  width: number;
  height: number;
  background: string;
}
export const Rectangle = styled.div<RetangleProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.height};
  padding: 20px
`;
