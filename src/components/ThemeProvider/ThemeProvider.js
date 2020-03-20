import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  useTheme as muiUseTheme
} from '@material-ui/core/styles';
import theme from '../../styles/theme';

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

const useTheme = () => muiUseTheme();

export default ThemeProvider;
export { useTheme };
