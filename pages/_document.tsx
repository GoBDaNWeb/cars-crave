import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preload" href="/fonts/Actay-Regular.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="preload" href="/fonts/ActayWide-Bold.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-Black.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-ExtraBold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-ExtraLight.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-Medium.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Onest-Thin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
