import { type AppType } from "next/dist/shared/lib/utils";

import { DefaultSeo } from "next-seo";
import { seo } from "../lib/seo";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
