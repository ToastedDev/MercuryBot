import { NextSeoProps } from "next-seo";

const title = "MercuryBot";
const description = "The only bot you need to have fun.";
const domain = "mercury.toastify.tk";
const color = "#F79B1E";

export const seo: NextSeoProps = {
  title: "Home",
  titleTemplate: `%s | ${title}`,
  description,
  themeColor: color,
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: color,
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
  ],
  twitter: {
    handle: "@ToastifyDev",
    cardType: "summary",
  },
  openGraph: {
    type: "website",
    url: `https://${domain}`,
  },
};
