import { css } from "@emotion/css";
import { submitBtn } from "../../styles/buttons.js";

const styles = css`
  display: grid;
  grid-template-rows: min-content 1fr;

  .top-bar {
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      ${submitBtn}
    }

    @media (min-width: 716px) {
    }
  }

  h1 {
    font-size: 1.5em;
    margin: 0;
    text-transform: capitalize;

    @media (min-width: 716px) {
      font-size: 2em;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: -20px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }

  li {
    width: 160px;
    text-align: center;
    margin: 20px;
  }

  li a {
    display: block;
    border-radius: var(--border-radius);
    font-weight: bold;
    padding: 50px 0;
    background-color: var(--champion-list-background-color);
    color: var(--champion-list-text-color);
    text-decoration: none;
    outline: none;

    @media (hover) {
      /* Prevent top champion box from being highlighted after clicking cancel from AddChampion */
      :hover {
        background-color: var(--champion-list-hover-background-color);
        color: var(--champion-list-hover-text-color);
      }
    }

    :focus,
    :active {
      box-shadow: 0 0 0 3px var(--champion-list-focus-box-shadow-color);
    }
  }

  .champion {
    color: var(--champion-heading-accent-color);
  }
`;

export default styles;
