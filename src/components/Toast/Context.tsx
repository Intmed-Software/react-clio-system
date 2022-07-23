import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Toast } from "./ToastComponent";
import { SimpleToastProps, ToastContextProps, ToastProps } from "./types";

export const ToastContext = createContext<ToastContextProps>(
  {} as ToastContextProps
);

export const ToastProvider = (props) => {
  const [toastProperties, setToastProperties] = useState<ToastProps>(
    {} as ToastProps
  );

  function success(val: SimpleToastProps) {
    open({ ...val, ...{ variant: "success" } });
  }
  function error(val: SimpleToastProps) {
    open({ ...val, ...{ variant: "error" } });
  }
  function warning(val: SimpleToastProps) {
    open({ ...val, ...{ variant: "warning" } });
  }
  function info(val: SimpleToastProps) {
    open({ ...val, ...{ variant: "info" } });
  }
  function light(val: SimpleToastProps) {
    open({ ...val, ...{ variant: "light" } });
  }
  function dark(val: SimpleToastProps) {
    open({ ...val, ...{ variant: "dark" } });
  }

  function open(val: ToastProps) {
    const { timeOut = 3000 } = val;
    setToastProperties({ ...val, ...{ visible: true } });
  }

  function close() {
    setToastProperties({} as ToastProps);
  }

  return (
    <ToastContext.Provider
      value={{
        success,
        error,
        warning,
        info,
        light,
        dark,
        close,
      }}
    >
      {props.children}
      {createPortal(<Toast {...toastProperties} />, document.body)}
    </ToastContext.Provider>
  );
};

export function useToast() {
  return useContext(ToastContext);
}
