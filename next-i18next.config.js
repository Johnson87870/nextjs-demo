// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
    localeDetection: false
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}