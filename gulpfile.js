const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const gulp = require('gulp');

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

const srcFolder = './src';
const buildFolder = './build';

const paths = {
  base: {
    build: buildFolder,
    src: srcFolder,
  },
  build: {
    html: buildFolder,
    styles: `${buildFolder}/css`,
    scripts: `${buildFolder}`,
    images: `${buildFolder}/images`,
    svg: `${buildFolder}/images/svg`,
    fonts: `${buildFolder}/fonts`,
  },
  src: {
    html: `${srcFolder}/views/*.html`,
    styles: `${srcFolder}/styles/*.scss`,
    scripts: `${srcFolder}/*.js`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png}`,
    svg: `${srcFolder}/**/*.svg`,
    fonts: `${srcFolder}/**/*.{woff,woff2,ttf,otf,eot}`,
  },
};

function webpack() {
  return gulp
    .src(paths.src.scripts)
    .pipe(
      plugins.plumber({
        errorHandler: plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        }),
      })
    )
    .pipe(
      plugins.webpackStream({
        mode: 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        module: {
          rules: [
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
        },
        output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'build'),
          clean: true,
        },
        resolve: {
          extensions: ['.ts', '.js', '.json'],
          alias: {
            '@': path.resolve(__dirname, 'src'),
          },
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
          }),
        ],
      })
    )
    .on('error', (err) => {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(gulp.dest(paths.build.scripts))
    .pipe(plugins.browserSync.stream());
}

function devServer(cb) {
  plugins.browserSync.init({
    server: {
      baseDir: paths.base.build,
    },
    notify: false,
    port: 3000,
  });
  cb();
}

exports.default = gulp.series(webpack, devServer);
