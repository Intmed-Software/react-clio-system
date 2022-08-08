import { storiesOf } from "@storybook/react";
import React from "react";
import { TextField } from "../../components/TextField";
import { Typography } from "../../components/Typography";
import colors from "../../patters/colors";
import { Rectangle, RectangleDescription } from "../utils/Reatangle";
storiesOf("Pattens", module).add("Paleta de cores", () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        padding: "10px",
        gap: "10px",
      }}
    >
      {Object.keys(colors).map((item, key) => (
        <div>
          <Rectangle
            key={key}
            background={colors[item]}
            width={300}
            height={50}
          />
          <RectangleDescription width={300} background={colors[item]}>
            <Typography>{colors[item]}</Typography>
            <TextField value={`colors.${item}`} disabled id="text-field" />
          </RectangleDescription>
        </div>
      ))}
    </div>
  );
});
