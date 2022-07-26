import React, { forwardRef } from 'react';
import { Typography } from '../Typography';

import { Label, ElementRadio, Mark } from './style';
import { InputRadioProps } from './types';

export function Radio({ 
  label, 
  name, 
  value,
  readOnly,
  onChange,
  ...props
}: InputRadioProps) {

  function onHandleChange (event) { if (!readOnly ) onChange(event) }

  return (
    <Label
      onClick={onHandleChange}
      htmlFor={name}
    >
      <ElementRadio {...props} name={name} value={value} />
      <Mark />

      <Typography size='small' weight={props.defaultChecked || props.checked ? 'bold' : 'regular'}>{label}</Typography>       
    </Label>
  );
};