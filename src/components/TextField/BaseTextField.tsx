import React from "react";
import { FormHelperText } from "../FormHelperText";
import { Label } from "../Label";
import {
  EndAdornmentEl, InputBase,
  InputContent,
  LabelContent,
  StartAdornmentEl
} from "./styles";
import { TextFieldProps } from "./types_d";

export function TextField({
  error,
  errorHelper,
  label,
  endAdornment,
  startAdornment,
  ...rest
}: TextFieldProps) {
  return (
    <>
      <LabelContent>
        <Label> {label} </Label>
      </LabelContent>
      <InputContent>
        <StartAdornmentEl> {startAdornment} </StartAdornmentEl>
        <InputBase
          extraSpacesStart={!!startAdornment}
          extraSpacesEnd={!!endAdornment}
          {...rest}
        />
        <EndAdornmentEl> {endAdornment} </EndAdornmentEl>
      </InputContent>
      <FormHelperText visible={error} message={errorHelper} />
    </>
  );
}
