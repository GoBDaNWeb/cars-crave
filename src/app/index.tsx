import type { AppProps } from "next/app";
import { withProviders } from "./providers";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default withProviders(App);
