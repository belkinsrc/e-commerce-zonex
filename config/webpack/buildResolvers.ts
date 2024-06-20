import { Configuration } from 'webpack';
import { BuildOptions } from 'config/types';

const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': paths.src,
    },
  };
};

export { buildResolvers };
