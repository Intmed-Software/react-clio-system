import styled from "styled-components";
import colors from "../../patters/colors";

export const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CollapseHeader = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 32px;
  border-radius: 8px 8px 0 0;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.active ? colors.lighterBlue : colors.lightestBlue};
  border: 1px solid
    ${(props) => (props.active ? colors.lighterBlue : colors.lightestBlue)};
  transition: background-color 1s ease;
`;

export const CollapseContents = styled.div<{
  maxHeight: string;
  active: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${(props) => props.maxHeight};
  background-color: ${colors.white};
  border-radius: 0 0 8px 8px;
  border: 1px solid ${colors.lighterBlue};
  border-top: none;
  padding: 16px;
  visibility: ${(props) => (props.active ? "" : "hidden")};
  overflow: hidden;
  transition: max-height 1s ease;
`;

export const MarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    fill: ${colors.black};
    margin-left: 19.5px;
  }
`;
