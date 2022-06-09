import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/global.css';
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Steven Conaway</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" key="shortcutIcon" />
      <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
