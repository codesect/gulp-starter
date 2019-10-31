export const srcDir = './src';
export const srcHTMLBuild = `${srcDir}/html/*.html`;
export const srcHTMLWatch = `${srcDir}/html/**/*.html`;
export const srcImages = `${srcDir}/images/**/*.{gif,ico,jpg,jpeg,png,svg}`;
export const srcJS = `${srcDir}/scripts/**/*.js`;
export const srcSass = `${srcDir}/styles/**/*.s[a|c]ss`;

export const distDir = './dist';
export const distCSS = `${distDir}/css`;
export const distHTML = `${distDir}/`;
export const distImages = `${distDir}/images`;
export const distJS = `${distDir}/js`;

// https://webpack.js.org/configuration/devtool/#devtool
export const sourcemapJS = 'source-map';

export const openBrowser = true;
export const port = 3000;

// Add a CSS selector to the list of elements to exclude from Axe analysis
// https://github.com/felixzapata/gulp-axe-webdriver#exclude
export const a11yExcludeSelector = 'iframe';
export const a11yHeadlessBrowser = true;
