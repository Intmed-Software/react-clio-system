import React from "react";
import { Typography } from "../Typography";
import { AvatarInitial, AvatarPhoto } from "./styled";
import { AvatarProps } from "./types";
import { initials } from "./utils";

export function Avatar({
  size = "medium",
  background = "mediumBlue",
  ...rest
}: AvatarProps) {
  function setLabelSize() {
    switch (size) {
      case "large":
        return "small";
      case "medium":
        return "xs";
      case "small":
        return "xxs";
    }
  }

  const avatarProperties = {
    ...rest,
    ...{ size, background },
  };
  return rest.img ? (
    <AvatarPhoto {...avatarProperties}></AvatarPhoto>
  ) : (
    <AvatarInitial {...avatarProperties}>
      <Typography weight="bold" size={setLabelSize()} color="white">
        {initials(avatarProperties.label)}
      </Typography>
    </AvatarInitial>
  );
}
