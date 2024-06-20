import { ModuleOptions } from 'webpack';
import { BuildOptions } from 'config/types';

const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ];
};

export { buildLoaders };
