import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { deepOrange, orange } from '@material-ui/core/colors';

export const defaultTheme = unstable_createMuiStrictModeTheme({
  palette: {
    type: 'dark',
    primary: {
      main: orange[500],
    },
    secondary: {
      main: deepOrange[900],
    },
  },
  typography: {
    h1: {
      fontWeight: 100,
    },
    h2: {
      fontWeight: 100,
    },
    h3: {
      fontWeight: 100,
    },
    h4: {
      fontWeight: 100,
    },
    h5: {
      fontWeight: 100,
    },
    h6: {
      fontWeight: 300,
    },
  },
});