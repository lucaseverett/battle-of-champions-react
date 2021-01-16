import { css } from "@emotion/css";
import { input } from "../styles/inputs.js";

const styles = css`
  font-family: "Roboto", sans-serif;
  background-color: var(--app-background-color);
  color: var(--app-text-color);
  outline: none;
  min-height: 100%;

  main {
    a,
    button,
    input {
      transition: var(--transitions);
    }
  }

  scrollbar-color: rgb(255, 255, 255, 0.4) rgb(0, 0, 0, 0.3);
  &::-webkit-scrollbar {
    background-color: rgb(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.4);
    border: 1px solid rgb(0, 0, 0, 0.2);
  }

  @media (max-width: 715px) {
    display: grid;
    grid-template-rows: min-content min-content 1fr;
  }

  @media (min-width: 716px) {
    display: grid;
    grid-template-columns: 250px auto;
    min-height: 100%;
  }

  .menu {
    outline: none;

    span {
      cursor: pointer;
      font-size: 36px;
      padding: 10px;
      margin: 10px 10px -10px;

      :focus,
      :hover,
      :active {
        background-color: var(--menu-item-hover-background-color);
        border-radius: 50%;
      }
    }

    @media (min-width: 716px) {
      display: none;
    }
  }

  input {
    ${input}
    width: 100%
  }
`;

export default styles;
