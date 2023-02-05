/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=1058949008552370277&permissions=314368&scope=bot%20applications.commands",
      },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
