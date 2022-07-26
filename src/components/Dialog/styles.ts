import styled, { css } from "styled-components";
import colors from "../../patters/colors";
import { DialogProps } from "./types";
export const FullScreen = styled.div<DialogProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeModal 380ms ease-in-out 1;
  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const FullScreemCase = () => css`
  width: 100%;
  height: 100vh;
`;
export const Container = styled.div<DialogProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 8px;
  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;
  box-shadow: 0px 4px 4px rgba(39, 50, 63, 0.16);
  ${(props) => (props.fullScreem ? FullScreemCase() : null)}

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
`;
