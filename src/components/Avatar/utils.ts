export const initials = (name) =>
  name
    ? name
        .split(" ")
        .map((item) => item.charAt(0).toUpperCase())
        .join("")
    : "";
