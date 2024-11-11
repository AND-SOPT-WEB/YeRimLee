import { css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0%);
    scroll-behavior: smooth;
  }

  ul,
  li {
    padding-left: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  h2 {
    margin: 0;
  }
`;

export default globalStyles;
