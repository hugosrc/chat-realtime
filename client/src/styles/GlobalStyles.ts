import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    font-family: 'Roboto', sans-serif;
  }

  *, input, button {
    border: none;
    background: none;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  :root {
    --background: #F2F7F7;
    --primary: #54D38A;
    --outline: #A5B5C1;
    --secondary: #303841;
    --gray: #363E47;
    --white: #ffffff;
  }
`