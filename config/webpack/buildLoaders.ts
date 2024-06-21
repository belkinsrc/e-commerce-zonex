import { ModuleOptions } from 'webpack';
import { BuildOptions } from 'config/types';

const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const ts = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styles = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  const images = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fonts = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  return [ts, styles, images, fonts];
};

export { buildLoaders };
