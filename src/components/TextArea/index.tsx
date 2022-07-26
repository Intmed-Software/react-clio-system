import React from "react";
import { FormHelperText } from "../FormHelperText";
import { Label } from "../Label";
import { LabelContent, TextAreaBase } from "./styles";
import { TextAreaProps } from "./types";

export function TextArea({
  label,
  error,
  errorHelper,
  ...props
}: TextAreaProps) {
  return (
    <>
      <LabelContent>
        <Label>{label}</Label>
      </LabelContent>
      <TextAreaBase {...props} error={error}></TextAreaBase>
      <FormHelperText visible={error} message={errorHelper} />
    </>
  );
}
