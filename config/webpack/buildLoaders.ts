import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions, RuleSetRule } from 'webpack';
import { BuildOptions } from 'config/types';

const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const { mode } = options;

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

  const styles: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      cssLoader,
      'sass-loader',
    ],
  };

  const ts: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const images: RuleSetRule = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fonts: RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  return [ts, styles, images, fonts];
};

export { buildLoaders };
