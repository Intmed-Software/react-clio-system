import styled from "styled-components";
import { FieldBases } from "../../styles/mixins";
import { TextAreaProps } from "./types";

export const TextAreaBase = styled.textarea<TextAreaProps>`
  padding: 8px;
  ${(props) => FieldBases({ error: props.error })}
`;

export const LabelContent =  styled.div`
  margin-bottom: 8px;
`