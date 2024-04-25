// pages/_app.tsx

import React from 'react'; // Add the missing import statement for React
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
