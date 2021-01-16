import { css } from "@emotion/css";
import { defaultBtn, submitBtn, deleteBtn } from "../styles/buttons.js";

const styles = css`
  min-height: 100%;
  padding: 0 20px 30px;
  display: grid;

  @media (min-width: 716px) {
    padding: 30px 20px 30px;
  }

  h1 {
    font-size: 1.5em;
    padding: 0 0 30px;
    margin: 0;
    text-transform: capitalize;

    @media (min-width: 716px) {
      font-size: 2em;
    }
  }

  input {
    margin-bottom: 20px;
    :last-of-type {
      margin-bottom: 40px;
    }
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  button {
    &.button {
      ${defaultBtn}
    }

    &.submit {
      ${submitBtn}
    }

    &.delete {
      ${deleteBtn}
    }

    margin-right: 10px;
  }

  .champion {
    color: var(--champion-heading-accent-color);
  }
`;

export default styles;
