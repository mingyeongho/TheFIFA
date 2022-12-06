import type { AppProps } from "next/app";
import "../styles/global.scss";
import HeadInfo from "../components/HeadInfo/HeadInfo";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadInfo />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
