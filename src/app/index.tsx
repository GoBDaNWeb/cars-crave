import type { AppProps } from "next/app";
import { BaseLayout } from "widgets/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
