import styled from "styled-components";
import colors from "../../patters/colors";
import sizes from "../../patters/sizes";
import { FieldBases } from "../../styles/mixins";
import { TextFieldBaseProps } from "./types_d";
export interface InputBaseProps extends TextFieldBaseProps {
  extraSpacesStart: boolean;
  extraSpacesEnd: boolean;
}


export const InputBase = styled.input<InputBaseProps>`
  padding: 8px;
  padding-left: ${(props) => (props.extraSpacesStart ? 35 : 8)}px;
  padding-right: ${(props) => (props.extraSpacesEnd ? 35 : 8)}px;
  ${(props) => FieldBases({ error: props.error })}
`;

export const ErrorHelperContet = styled.div({
  color: colors.mediumError,
});

export const InputContent = styled.div({
  display: "flex",
  position: "relative",
});

const adornmentBase = `
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    svg {
        font-size: ${sizes.medium};
        color: ${colors.darkestGray};
    }
`;
export const EndAdornmentEl = styled.div`
  ${adornmentBase}
  right: 8px;
`;

export const StartAdornmentEl = styled.div`
  ${adornmentBase}
  left: 8px;
`;


export const LabelContent =  styled.div`
  margin-bottom: 8px;
`