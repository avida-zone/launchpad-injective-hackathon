import "~/styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "~/providers/AppProvider";
import Layout from "~/components/layout/Layout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="bottom-center" reverseOrder={false} />
    </AppProvider>
  );
}
