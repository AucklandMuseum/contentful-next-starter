const path = require('path');

const i18n = {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de-DE'],
    localeDetection: false,
};

const next18nextConfig = {
	i18n,
	fallbackLng: 'en-US',
	keySeparator: ".",
	nsSeparator: ":",
	localePath: path.resolve("./public/static/locales"),
	reloadOnPrerender: process.env.NODE_ENV === "development"
};

module.exports = next18nextConfig;
