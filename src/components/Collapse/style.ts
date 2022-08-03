import styled from "styled-components";
import colors from "../../patters/colors";

export const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const CollapseHeader = styled.div<{active: boolean}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 32px;
  border-radius: 8px 8px 0 0;
  padding: 8px;
  background-color: ${props => props.active ? colors.lighterBlue: colors.lightestBlue};
`;

export const CollapseContents = styled.div<{active: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${colors.white};
  border-radius: 8px;
  border: 1px solid ${colors.lighterBlue};
  border-top: none;
  padding: 16px;
  visibility: ${props => props.active ? "": "hidden"};
`;
