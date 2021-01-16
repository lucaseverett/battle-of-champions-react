import { css } from "@emotion/css";

const input = css`
  border-radius: var(--border-radius);
  border: none;
  box-shadow: 0 0 0 2px var(--input-border-color);
  padding: 10px;
  color: var(--input-text-color);
  background-color: var(--input-background-color);
  -webkit-appearance: none;

  ::placeholder {
    color: var(--input-placeholder-text-color);
    opacity: 1;
  }

  :hover {
    box-shadow: 0 0 0 2px var(--input-hover-border-color);
  }

  :focus,
  :active {
    outline: none;
    color: var(--input-focus-text-color);
    box-shadow: 0 0 0 2px var(--input-hover-border-color);
    background-color: var(--input-focus-background-color);
  }
`;

export { input };
