import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function SelendraApp({ Component, pageProps }) {
  return (
    <section>
      <ThemeProvider enableSystem={false}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </section>
  );
}

export default SelendraApp;
