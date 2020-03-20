import { createMuiTheme } from '@material-ui/core';

const colors = {
  black: '#404040',
  white: '#FFFFFF',
  gray: '#D8D8D8',
  red: '#A6354C'
};

const typography = {
  fontFamily: '"Avenir Next", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
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
  }
});

export default theme;
