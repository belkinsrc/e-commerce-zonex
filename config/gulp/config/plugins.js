const webpackStream = require('webpack-stream');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const plugins = {
  // webpack
  webpackStream,

  // Server
  browserSync,

  // Error processing
  plumber,
  notify,
};
