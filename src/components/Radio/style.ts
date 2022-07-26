import styled from 'styled-components';
import colors from '../../patters/colors';

import { InputRadioProps } from './types';

export const Label = styled.label`
  display: flex;
  align-items: center;
  height: 22px;
  cursor: pointer;
  user-select: none;
`;

export const ElementRadio = styled.input.attrs<InputRadioProps>({
  type: 'radio',
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }

  &:checked ~ span {
    border-color: ${colors.mainBlue};
  }

  &:disabled ~ span {
    color: ${colors.mediumGray};
  }
`;

export const Mark = styled.span`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 10px;
  width: 10px;
  border: solid 1px;
  border-radius: 50%;
  transition: 180ms ease-in-out;
  margin-right: 7px;
  
  &:after {
    content: '';
    position: absolute;
    display: none;
    border: solid 2px ${colors.mainBlue};
    background-color: ${colors.mainBlue};
    border-radius: 10px
  }
`;