export const initials = (name: string) =>
  name
    ? name
        .split(" ")
        .map((item) => item.charAt(0).toUpperCase())
        .join("")
    : "";

export const parseFirstAndLastName = (
  fullName: string,
  target: string = " "
) => {
  if (!fullName) return "";
  const splitedName = fullName.split(target);
  const firstName = [...splitedName].shift();
  const lastName = [...splitedName].pop();
  return [firstName, lastName].join(" ");
};
