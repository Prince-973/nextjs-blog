import NavBar from "@/components/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog Bliss</title>
        <meta name="description" content="Blog Bliss" />
      </Head>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}
