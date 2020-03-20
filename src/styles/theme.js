import { createMuiTheme } from '@material-ui/core';

const colors = {
  black: '#404040',
  white: '#FFFFFF',
  gray: '#D8D8D8',
  red: '#A6354C'
};

const typography = {
  primary: {
    fontFamily: '"Avenir Next", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
  },
  secondary: {
    fontFamily: 'Roboto, sans-serif'
  }
};

const variables = {
  spacing: {
    navWidth: '265px',
    globalPadding: '2em'
  }
};

const theme = createMuiTheme({
  typography: { ...typography },
  palette: {
    primary: {
      main: colors.black
    },
    secondary: {
      main: colors.gray
    },
    common: colors,
    background: {
      default: colors.white
    },
    text: {
      primary: colors.black,
      secondary: colors.white
    }
  },
  variables: { ...variables }
});

export default theme;
