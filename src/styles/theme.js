import { createMuiTheme } from '@material-ui/core';

const colors = {
  black: '#404040',
  white: '#FFFFFF',
  lighterGray: '#C6D0D7',
  lightGray: '#D8D8D8',
  gray: '#7D8892',
  darkGray: '#666',
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
    navWidth: '210px',
    globalPadding: '1em 3em'
  }
};

const theme = createMuiTheme({
  typography: { ...typography },
  palette: {
    primary: {
      main: colors.black
    },
    secondary: {
      main: colors.red
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
  variables: { ...variables },
  overrides: {
    MuiFormLabel: {
      root: {
        color: colors.darkGray
      }
    },
    MuiFormHelperText: {
      root: {
        color: colors.gray
      }
    },
    MuiRadio: {
      root: {
        color: colors.darkGray
      }
    },
    MuiCheckbox: {
      root: {
        color: colors.darkGray
      }
    }
  }
});

const darkTheme = createMuiTheme({
  ...theme,
  overrides: {
    MuiInput: {
      root: {
        color: colors.white
      },
      input: {
        '&::before': {
          borderColor: colors.lightGray
        },
        '&$disabled': {
          color: colors.lightGray
        }
      },
      underline: {
        borderColor: colors.lightGray,
        '&:before': {
          borderBottomColor: 'rgba(255, 255, 255, 0.7)'
        },
        '&:hover:not($disabled):before': {
          borderBottomColor: 'rgba(255, 255, 255, 0.7)'
        }
      }
    },
    MuiIconButton: {
      root: {
        color: colors.lightGray
      }
    }
  }
});

export default theme;
export { theme, darkTheme };
