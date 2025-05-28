// import 'styled-components';
// import { theme } from './theme';

// type Theme = typeof theme;

// declare module 'styled-components' {
//   interface DefaultTheme extends Theme {}
// }

import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      primaryText: string;
      secondaryText: string;
      white: string;
    };
    font: {
      main: string;
      heading: string;
    };
  }
}
