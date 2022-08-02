import styled, { css } from "styled-components";
import colors from "../../patters/colors";
import { AvatarProps } from "./types";

const avatarSizes = {
  large: 40,
  medium: 32,
  small: 23,
};

const BaseAvatar = ({ size, background }: AvatarProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${avatarSizes[size]}px;
  width: ${avatarSizes[size]}px;
  border-radius: 100px;
  background-color: ${colors[background]};
`;

export const AvatarInitial = styled.div<AvatarProps>`
  ${(props) => BaseAvatar(props)}
`;

export const AvatarPhoto = styled.div<AvatarProps>`
  ${(props) => BaseAvatar(props)}
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
