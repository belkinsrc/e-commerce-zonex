import { ModuleOptions } from 'webpack';
import { BuildOptions } from 'config/types';

const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const ts = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styles = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  };

  const images = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  return [ts, styles, images];
};

export { buildLoaders };
