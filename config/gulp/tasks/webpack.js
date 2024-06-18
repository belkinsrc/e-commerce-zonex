const webpackConfig = require('webpack.config');

const webpack = () => {
  return app.gulp
    .src(app.paths.src.scripts)
    .pipe(
      app.plugins.plumber({
        errorHandler: app.plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        }),
      })
    )
    .pipe(app.plugins.webpackStream(webpackConfig()))
    .on('error', (err) => {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(app.plugins.browserSync.stream());
};
