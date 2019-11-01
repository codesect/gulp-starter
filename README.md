<h1 align="center">💡 Gulp Starter Kit 💡<br>for Front-End Projects</h1>

This Gulp starter kit will help you do front-end tasks like:

- combining HTML partials
- compiling ES6+ code, so you can use next-generation JavaScript
- compiling and auto prefixing your Sass files
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

Your site is now running at `http://localhost:3000`. Open the project in your code editor, and edit something in the `src` folder. Save your changes and the browser will update in real-time.

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

### `dist/`

This directory contains your compiled files. It will be created only after you run `npm start` or `npm run build`. This directory is not tracked by git and won't be uploaded to your repo.

### `gulp/`

This directory contains private gulp tasks used in `gulpfile.babel.js`.

### `node_modules/`

This directory contains all of the modules your project depends on. These are automatically installed when you run `npm install`.

### `src/`

This directory will contain all of the code related to what you will see on the front-end of your site. This is the folder you're working in. If you want to rename it to something else, don't forget to update the `gulp/config.js` file.

### `.babelrc`

This is a configuration file for Babel. There is only one preset enabled by default, [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env). It only includes polyfills and code transforms needed for users whose browsers are defined in your `.browserlistrc` config.

### `.browserlistrc`

This is a configuration file used by Autoprefixer, Babel, and normalize.css to find your targeted browsers. [browserslist](https://github.com/browserslist/browserslist) allows you to describe which browsers your site needs to support.

### `.eslintrc`

This is a configuration file for ESLint. ESLint is very flexible and configurable linter that helps to identify issues in your code.

### `.gitignore`

This file tells git which files it should not track.

### `.prettierrc`

This is a configuration file for Prettier. Prettier is a tool to help keep the formatting of your code consistent.

### `gulpfile.babel.js`

This file contains public tasks which can be run by the gulp command.

### `package.json` and `package-lock.json`

`package.json` is a manifest file for Node.js projects, which includes things like metadata (the project's name, author, etc). This manifest is how npm knows which packages to install for your project. `package-lock.json` is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project.

### `README.md`

A text file containing information about your project. This is the one you're reading at the moment.

## Install and Build

Once you cloned the repo, you need to install the dependencies. You can use either `yarn` or `npm`:

### Install dependencies

```bash
npm install
# OR
yarn install
```

### Start a dev server with browser-sync

It builds HTML, CSS, and the JavaScript bundle; starts a dev server and refreshes the browser on every saved change.

```bash
npm start
# OR
yarn start
```

### Build production bundle

It uglifies JS, minifies CSS and images, replaces references to non-optimized scripts and stylesheets in HTML files and copies everything necessary to the `dist` folder - ready to upload.

```bash
npm run build
# OR
yarn build
```

## Contribution

All contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for information.
