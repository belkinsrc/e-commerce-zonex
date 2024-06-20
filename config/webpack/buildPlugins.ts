import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from 'config/types';

const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
  const { paths } = options;
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, paths.public, 'index.html'),
    }),
  ];
};

export { buildPlugins };
