import React from "react";
import { Typography } from "../Typography";

interface FormHelperTextProps {
  message?: string;
  visible?: boolean;
}
export function FormHelperText(props: FormHelperTextProps) {
  if (!props.visible) return <></>;
  return (
      <Typography size="xxs" color="mediumError">
        {props.message}
      </Typography>
  );
}