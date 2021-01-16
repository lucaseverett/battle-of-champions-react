import { css } from "@emotion/css";

const button = css`
  padding: 10px;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const submitBtn = css`
  ${button}

  background-color: var(--primary-button-background-color);
  color: var(--primary-button-text-color);

  :hover {
    background-color: var(--primary-button-hover-background-color);
    color: var(--primary-button-hover-text-color);
  }

  :focus,
  :active {
    box-shadow: 0 0 0 2px var(--primary-button-box-shadow-color);
    border-color: var(--primary-button-box-shadow-color);
  }
`;

const defaultBtn = css`
  ${button}

  background-color: var(--normal-button-background-color);
  color: var(--normal-button-text-color);

  :hover {
    background-color: var(--normal-button-hover-background-color);
    color: var(--normal-button-hover-text-color);
  }

  :focus,
  :active {
    box-shadow: 0 0 0 2px var(--normal-button-box-shadow-color);
  }
`;

const deleteBtn = css`
  ${defaultBtn}

  color: var(--delete-button-text-color);

  :hover {
    color: var(--delete-button-hover-text-color);
  }
`;

export { defaultBtn, submitBtn, deleteBtn };
