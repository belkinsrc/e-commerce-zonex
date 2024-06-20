import webpackConfig from '../../../webpack.config';
import { appGulp } from '../../../gulpfile';

const webpack = () => {
  return appGulp.gulp
    .src(appGulp.paths.src.scripts)
    .pipe(appGulp.plugins.webpackStream(webpackConfig()))
    .on('error', (err: Error) => {
      console.error('WEBPACK ERROR', err);
    })
    .pipe(appGulp.gulp.dest(appGulp.paths.base.build))
    .pipe(appGulp.plugins.browserSync.stream());
};

export { webpack };
