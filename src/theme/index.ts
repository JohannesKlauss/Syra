import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { deepOrange, orange } from '@material-ui/core/colors';

export const splinterTheme = unstable_createMuiStrictModeTheme({
  palette: {
    type: 'dark',
    primary: {
      main: orange[500],
    },
    secondary: {
      main: deepOrange[900],
    },
  },
});