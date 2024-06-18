const devServer = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: app.paths.base.build,
    },
    notify: false,
    port: 3000,
  });
};
