import styled, { keyframes } from "styled-components";
import { ToastProps } from "./types";

const fadein = keyframes`
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
`;

const fadeout = keyframes`
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 0; opacity: 0;}
`;

export const ToastContainer = styled.div<ToastProps>`
  visibility: ${props=> props.visible ?  "visible" : "hidden"};
  margin-left: -125px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 15%;
  bottom: 30px;
  -webkit-animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
`;
