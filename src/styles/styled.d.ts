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
      third: string;
      primaryText: string;
      secondaryText: string;
      thirdText: string;
      white: string;
      primaryBackground: string;
    };
    font: {
      main: string;
      heading: string;
    };
  }
}
