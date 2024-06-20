import gulp from 'gulp';
import paths from './config/gulp/config/paths';
import plugins from './config/gulp/config/plugins';
import { webpack } from './config/gulp/tasks/webpack';
import { devServer } from './config/gulp/tasks/devServer';

export const appGulp = {
  gulp,
  paths,
  plugins
}

const dev = gulp.series(webpack, devServer);

gulp.task('default', dev);
