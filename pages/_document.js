import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Montserrat-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Montserrat-SemiBold.ttf"
          as="font"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
