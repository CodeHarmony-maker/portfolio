import TokyoState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import "@/styles/animate.css";

export default function App({ Component, pageProps }) {
  return (
    <TokyoState>
      <PreLoader />
      <Component {...pageProps} />
    </TokyoState>
  );
}
