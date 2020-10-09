import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { deepOrange, deepPurple, orange } from "@material-ui/core/colors";

export const defaultTheme = unstable_createMuiStrictModeTheme({
  palette: {
    type: 'dark',
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: deepOrange[50],
    },
  },
});