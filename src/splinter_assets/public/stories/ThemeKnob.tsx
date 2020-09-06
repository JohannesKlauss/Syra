import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { select } from '@storybook/addon-knobs';
import { defaultTheme } from '../theme';
import { retroWaveTheme } from '../theme/retroWave';
import { CssBaseline } from '@material-ui/core';
import { audioSetup } from '../audioSetup';
import { RecoilRoot } from 'recoil/dist';

const themes: { [key: string]: any } = { Default: defaultTheme, RetroWave: retroWaveTheme };
const themeNames = Object.keys(themes);

export const ThemeKnob: React.FC = ({ children }) => {
  useEffect(audioSetup);

  const theme = select(
    'Theme',
    themeNames,
    themeNames[0],
    'Themes',
  );

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline/>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </ThemeProvider>
  );
};