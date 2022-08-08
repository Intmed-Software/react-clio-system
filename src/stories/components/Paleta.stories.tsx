import { storiesOf } from "@storybook/react";
import React from "react";
import colors from "../../patters/colors";
import { Rectangle } from "../utils/Reatangle";

storiesOf("FlexContainer", module).add("Paleta", () => {
  return (
    <>
      {Object.keys(colors).map((item, key) => (
        <Rectangle
          key={key}
          background={colors[item]}
          width={300}
          height={50}
        />
      ))}
    </>
  );
});
