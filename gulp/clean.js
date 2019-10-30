import del from 'del';

import { distDir } from './config';

function clean() {
  return del(distDir);
}

export default clean;
