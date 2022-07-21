import React, { ReactNode } from "react";

export interface TextAreaProps {}

interface DefaultIputProps {
  label?: string;
}

export interface TextFieldBaseProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    errorHelper?: string;
  }

export interface TextAreaProps extends DefaultIputProps, TextFieldBaseProps {
  mask?: any; //TODO: Adicionar mascaras.
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}
