import { appGulp } from '../../../gulpfile';

const devServer = () => {
  appGulp.plugins.browserSync.init({
    server: {
      baseDir: appGulp.paths.base.build,
    },
    notify: false,
    port: 3000,
  });
};

export { devServer };
