import React from "react";
import { TextField } from "../TextField/BaseTextField";
import { Typography } from "../Typography";
import { Highlight } from "./Higligh";
import { AutoCompleteContainer, Option, OptionsList } from "./styles";
import { AutoCompleteProps } from "./types";

export function Autocomplete({
  options,
  displayFunction,
  onSelect,
  ...rest
}: AutoCompleteProps) {
  const [display, setDisplay] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const wrapperRef = React.useRef(null);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) setDisplay(false);
  };

  const handleInputChange = (event) => {
    if (rest.onChange) rest.onChange(event);
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleSelectRow = (row) => {
    onSelect(row)
    setSearch(displayFunction(row));
    setDisplay(false);
  };

  function localDisplayOption(option: any): any {
    const optionText = displayFunction
      ? displayFunction(option)
      : option
      ? option.toString()
      : "";
    return optionText;
  }

  return (
    <AutoCompleteContainer ref={wrapperRef}>
      <TextField
        {...rest}
        type="search"
        value={search}
        onChange={handleInputChange}
        onClick={() => setDisplay((prev) => !prev)}
      />
      {display && (
        <OptionsList>
          {options
            .filter((obj) => {
              const optionText = localDisplayOption(obj);
              return !!optionText.match(new RegExp(search, "ig"));
            })
            .map((item, index) => (
              <Option key={index} onClick={() => handleSelectRow(item)}>
                <Typography weight="bold">
                  <Highlight source={displayFunction(item)} target={search}>
                    {(s) => <Typography weight="regular">{s}</Typography>}
                  </Highlight>
                  {displayFunction(item)}
                </Typography>
              </Option>
            ))}
        </OptionsList>
      )}
    </AutoCompleteContainer>
  );
}
