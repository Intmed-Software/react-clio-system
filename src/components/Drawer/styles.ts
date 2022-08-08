import styled from "styled-components";
import colors from "../../patters/colors";

export const DrawerContent = styled.div`
  transition: margin-left .5s;
  padding: 16px;
`;

export const DrawnerStyled = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  border-right: 0.5px solid ${colors.lightGray};
  box-sizing: border-box;
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
`;

export const DrawerListMenuActiveTag = styled.div<{active: boolean}>`
  width: 5px;
  min-height: 40px;
  background-color: ${colors.orangeBrand};
  border-radius: 0px 4px 4px 0px;
  visibility: ${props => props.active ? "": "hidden"};
`

export const DrawerListItemIcon = styled.div<{active: boolean}>`
  svg {
    color: ${props => props.active ? colors.orangeBrand: colors.darkestGray};
    font-size: 20px
  }
`

export const DrawerListItemText = styled.div<{active: boolean}>`
  color: ${props => props.active ? colors.orangeBrand: colors.darkestGray};
`

export const DrawerListContainer = styled.div`
  display: flex;
  column-gap: 12.5px;
  width: 100%;
  position: relative;
  align-items: center;
  height: auto;
  margin-bottom: 18px;
  cursor: pointer;
`