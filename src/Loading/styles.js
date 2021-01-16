import { css } from "@emotion/css";

const styles = css`
  display: grid;
  place-items: center;

  .spin {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid var(--spinner-background-color);
    border-radius: 50%;
    border-top-color: var(--spinner-border-color);
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default styles;
