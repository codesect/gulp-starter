import axe from 'gulp-axe-webdriver';

import { a11yExcludeSelector, a11yHeadlessBrowser, distHTML } from './config';

function a11y() {
  return axe({
    exclude: a11yExcludeSelector,
    headless: a11yHeadlessBrowser,
    urls: [`${distHTML}/*.html`],
  });
}

export default a11y;
