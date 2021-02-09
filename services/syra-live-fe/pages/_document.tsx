import { ColorModeScript, extendTheme } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

const config = {
  initialColorMode: 'dark' as 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
