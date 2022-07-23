export function apiDescription(props: string[]) {
  return `import { ${props.join(" , ")} } from "clio-system"`;
}
