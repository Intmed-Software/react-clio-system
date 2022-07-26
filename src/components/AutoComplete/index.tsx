import React from "react";
import { TextField } from "../TextField/BaseTextField";
import { Typography } from "../Typography";
import { AutoCompleteContainer, Option, OptionsList } from "./styles";
import { AutoCompleteProps } from "./types";

export function Autocomplete({ options, ...rest }: AutoCompleteProps) {

  function onHandleSelect(val) {
    rest.value = val;
  }
  return (
    <AutoCompleteContainer>
      <TextField {...rest} />
      <OptionsList>
        {options.map((item, index) => (
          <Option key={index} onClick={() => onHandleSelect(item)}>
            <Typography>{item}</Typography>
          </Option>
        ))}
      </OptionsList>
    </AutoCompleteContainer>
  );
}
