import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { select } from "@storybook/addon-knobs";
import { splinterTheme } from '../theme';
import { retroWaveTheme } from '../theme/retroWave';
import { CssBaseline } from '@material-ui/core';

const themes: {[key: string]: any} = { Splinter: splinterTheme, RetroWave: retroWaveTheme };
const themeNames = Object.keys(themes);

export const ThemeKnob: React.FC = ({ children }) => {
  const theme = select(
    "Theme",
    themeNames,
    themeNames[0],
    "Themes"
  );

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};