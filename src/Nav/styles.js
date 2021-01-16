import { css } from "@emotion/css";

const styles = css`
  .app-title {
    padding: 30px 20px;
    font-size: 2em;
    font-weight: bold;

    @media (min-width: 716px) {
      font-size: 1.5em;
      text-align: center;
    }
  }

  @media (min-width: 716px) {
    background-color: var(--nav-background-color);
    border-right: 1px solid var(--nav-border-color);

    .nav-content {
      position: fixed;
      width: 250px;

      @supports (-webkit-touch-callout: none) {
        /* remove position:fixed for iOS due to rubber band effect */
        position: initial;
      }
    }
  }

  nav {
    display: none;

    @media (max-width: 715px) {
      animation: fadein 0.4s ease-in-out;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (min-width: 716px) {
      display: block;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li a,
    .cancel {
      text-decoration: none;
      color: var(--menu-item-text-color);
      outline: none;
      transition: box-shadow 0.15s ease-in-out;
    }

    .cancel {
      span {
        padding: 5px;

        :focus,
        :hover,
        :active {
          background-color: var(--menu-item-hover-background-color);
          border-radius: 50%;
        }
      }
    }

    li a {
      display: block;
      padding: 15px 20px;

      :focus,
      :hover,
      :active {
        color: var(--menu-item-hover-text-color);
        background-color: var(--menu-item-hover-background-color);
      }

      &.active {
        color: var(--menu-active-text-color);
        background-color: var(--menu-active-background-color);
      }
    }

    .menu-open & {
      display: initial;
      z-index: 2;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--nav-background-color);
      display: grid;
      place-items: center;
      text-align: center;
      font-size: 36px;

      li a {
        display: block;
        padding: 2vw;
      }

      .cancel {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 10vw;
        span {
          font-size: 66px;
        }
        cursor: pointer;
      }
    }

    @media (min-width: 716px) {
      .cancel {
        display: none;
      }
    }
  }
`;

export default styles;
