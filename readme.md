<h1 align="center">💡 Gulp Starter Kit 💡<br>for Frontend Projects</h1>

This Gulp starter kit will help you do frontend tasks like:

- combining HTML partials
- compiling ES6+ code, so you can use next generation JavaScript
- compiling and autoprefixing your Sass files
- optimising your images, CSS, and JavaScript files
- spinning up a web server
- reloading the browser automatically whenever a file is saved
- synchronising interaction across multiple devices/browsers
- checking accessibility of production builds

## 🚀 Quick start

```bash
# Clone this repo
git clone https://github.com/codesect/gulp-starter.git <your-project-name>
# Navigate into your new directory
cd <your-project-name>
# Install dependencies
npm install
# Start dev server
npm start
```

Your site is now running at `http://localhost:3000`. Open the project in your code editor, and edit something in the `src` folder. Save your changes and the browser will update in real time.

![Gulp Frontend Starter](screenshot.png?raw=true&sanitize=true)

## What's Included

- [Gulp.js](https://github.com/gulpjs/gulp) task runner
- [Babel](https://github.com/babel/babel) compiler
- [Webpack](https://github.com/webpack/webpack) module bundler
- [Sass](http://sass-lang.com) with [PostCSS](https://github.com/postcss/postcss)' [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ImageMin](https://github.com/imagemin/imagemin) image minifier
- [Axe](https://github.com/dequelabs/axe-core) accessibility testing engine
- [ESLint](https://github.com/eslint/eslint) linter with Airbnb's [base config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Prettier](https://prettier.io/) code formatter

## What's Inside

A quick look at the top-level files and directories you'll see inside.

    .
    ├── dist
    ├── gulp
    ├── node_modules
    ├── src
    │   ├── html
    │   ├── images
    │   ├── scripts
    │   └── styles
    ├── .babelrc
    ├── .browserslistrc
    ├── .eslintrc
    ├── .gitignore
    ├── .prettierrc
    ├── gulpfile.babel.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

## Install and Build

You can use either `yarn` or `npm`:

### Install dependencies

```bash
yarn install
# OR
npm install
```

### Start a dev server with browser sync

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every saved changes.

```bash
yarn start
# OR
npm start
```

### Build production bundle

It uglifies JS, minifies CSS and images, replaces references to non-optimized scripts and stylesheets in HTML files and copies everything necessary to the `dist` folder - ready to upload.

```bash
yarn build
# OR
npm run build
```
