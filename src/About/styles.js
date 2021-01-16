import { css } from "@emotion/css";

const styles = css`
  padding: 30px 20px;

  p {
    line-height: 1.5;
  }

  a {
    color: var(--app-link-text-color);
    text-decoration: none;

    :hover,
    :focus,
    :active {
      text-decoration: underline;
      outline: none;
    }
  }

  #battle-of-champions {
    display: none;
  }

  .about {
    color: var(--champion-heading-accent-color);
  }

  h1 {
    font-size: 1.5em;
    padding: 0 0 30px;
    margin: 0;

    @media (min-width: 716px) {
      font-size: 2em;
    }
  }

  h2 {
    font-size: 1.3em;
    margin-top: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--nav-border-color);

    @media (min-width: 716px) {
      font-size: 1.5em;
    }
  }

  img {
    width: 100%;
  }

  @media (min-width: 716px) {
    img {
      max-width: 50%;
    }
  }

  pre {
    white-space: pre-wrap;
    word-break: break-word;
    background-color: var(--nav-background-color);
    padding: 10px;
  }
`;

export default styles;
