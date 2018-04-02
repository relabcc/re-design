import { injectGlobal } from 'styled-components';

import theme from './theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    font-family: ${theme.font};
    color: ${theme.colors.text};
  }

  #__next {
    min-height: 100%;
    min-width: 100%;
  }

  a {
    &:link,
    &:visited {
      color: inherit;
    }
  }
`;
