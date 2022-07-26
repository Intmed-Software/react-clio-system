import { TextFieldProps } from "../TextField/types_d";

export interface AutoCompleteProps extends TextFieldProps {
  options: any[];
  debounceTime?: number;
  displayFunction: (val: any) => string;
  onSelect?:(val) => any
}
