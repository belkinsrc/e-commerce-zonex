import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions, RuleSetRule } from 'webpack';
import { BuildOptions } from 'config/types';

const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const { mode, paths } = options;

  const cssLoader: RuleSetRule = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: true,
        localIdentName:
          mode === 'production' ? '[hash:base64]' : '[path][name]__[local]',
        exportLocalsConvention: 'camel-case',
      },
    },
  };

  const tsLoader: RuleSetRule = {
    loader: 'ts-loader',
    options: {
      transpileOnly: mode === 'development' ? true : false,
    },
  };

  const styles: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      cssLoader,
      'sass-loader',
    ],
    include: paths.src,
  };

  const scripts: RuleSetRule = {
    test: /\.tsx?$/,
    use: [tsLoader],
    exclude: /node_modules/,
  };

  const images: RuleSetRule = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    include: [paths.src, paths.public],
  };

  const fonts: RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    include: [paths.src, paths.public],
  };

  return [scripts, styles, images, fonts];
};

export { buildLoaders };
