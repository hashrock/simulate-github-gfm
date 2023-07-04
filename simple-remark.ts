import render from "./markdown.ts";

const input = `
- **Breaking: Changed how clients are instantiated with an API (#0)**\
  The API object must now be passed in as an api property on an object.
`;

const output = render(input);
console.log(output);
