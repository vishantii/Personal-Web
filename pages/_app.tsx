import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/color-mode';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light"></ColorModeScript>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.StrictMode>
  );
}
export default MyApp;
