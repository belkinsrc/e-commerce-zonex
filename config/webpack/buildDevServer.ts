import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from 'config/types';

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const { paths, port } = options;
  
  return {
    static: paths.output,
    port: port ?? 3000,
    open: true,
  };
};

export { buildDevServer };
