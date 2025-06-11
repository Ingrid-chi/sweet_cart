import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset 基本樣式 */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.color.backgroundPrimary || '#FFF'};
    color: ${({ theme }) => theme.color.primaryText || '#000'};
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
