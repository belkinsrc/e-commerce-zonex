import { Configuration } from 'webpack';
import { BuildOptions } from '../types';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

const buildWebpack = (options: BuildOptions): Configuration => {
  const { mode, port, paths } = options;

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    devtool: mode === 'development' ? 'inline-source-map' : false,
    devServer: buildDevServer(options),
    module: {
      rules: buildLoaders(options),
    },
    output: {
      filename: '[name].bundle.js',
      path: paths.output,
      clean: true,
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
  };
};

export { buildWebpack };
