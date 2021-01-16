import { css } from "@emotion/css";
import { defaultBtn, submitBtn } from "../styles/buttons.js";

const styles = css`
  padding: 0 20px 30px;

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
    ${defaultBtn}

    &.submit {
      ${submitBtn}
    }

    margin-right: 10px;
  }

  .champion {
    color: var(--champion-heading-accent-color);
  }
`;

export default styles;
