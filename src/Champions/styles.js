import { css } from "@emotion/css";

const styles = css`
  padding: 0 20px 10px;
  min-height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;

  @media (min-width: 716px) {
    padding: 30px 20px 10px;
  }
`;

export default styles;
