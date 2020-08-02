import { createMuiTheme } from '@material-ui/core';
import { deepOrange, orange } from '@material-ui/core/colors';

export const splinterTheme = createMuiTheme({
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