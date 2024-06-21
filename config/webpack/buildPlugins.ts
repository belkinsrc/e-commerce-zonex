import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { BuildOptions } from 'config/types';

const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
  const { paths, mode } = options;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, paths.public, 'index.html'),
    }),
  ];

  if (mode === 'production') {
    plugins.push(new MiniCssExtractPlugin());
  }
  return plugins;
};

export { buildPlugins };
