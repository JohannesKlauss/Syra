import { createMuiTheme } from '@material-ui/core';
import { amber, deepOrange, indigo, lightBlue, purple } from '@material-ui/core/colors';

export const retroWaveTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple,
    error: deepOrange,
    action: {
      disabledBackground: amber[400]
    },
    text: {
      primary: indigo[600],
      secondary: indigo[300],
      disabled: lightBlue[100]
    }
  },
});