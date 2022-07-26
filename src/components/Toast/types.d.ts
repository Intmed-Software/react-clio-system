export type Theme = "success" | "error" | "warning" | "info" | "light" | "dark";
import { AlertProps } from "../Alets/types";

export interface ToastProps extends AlertProps {
  timeOut?: number;
  visible?: boolean;
  showCloseButon?: boolean 
}

export interface SimpleToastProps {
  message: string;
  showCloseButon?: boolean;
  timeOut?: number;
}

type Dials = (val: SimpleToastProps) => void;

export interface ToastContextProps {
  success: Dials;
  error: Dials;
  warning: Dials;
  info: Dials;
  light: Dials;
  dark: Dials;
  close: () => void;
}
