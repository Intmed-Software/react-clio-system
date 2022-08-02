export type Sizes = "large" | "medium" | "small";

export type BackGround = "mediumBlue" | "darkBlue" | "mainOrange"

export interface AvatarProps {
  size: Sizes;
  background: BackGround;
  label: string;
  img: string;
}
