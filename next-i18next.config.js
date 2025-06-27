/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "ae"],
    localeDetection: false,
  },
  localePath: "./public/locales",
};

module.exports = nextI18NextConfig;
