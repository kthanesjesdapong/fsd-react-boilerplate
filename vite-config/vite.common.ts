import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import {
  defineConfig,
  type BuildOptions,
  type ConfigEnv,
  type PreviewOptions,
  type ServerOptions,
} from 'vite';
import { COMMONS } from './constants';

export default ({ mode }: ConfigEnv) => {
  /* TODO: Make this configurable - dependent on environment */
  const server: Partial<ServerOptions> = {
    host: COMMONS.HOST,
    port: COMMONS.PORT,
    strictPort: COMMONS.STRICT_PORT,
    watch: {
      usePolling: COMMONS.WATCH.USE_POOLING,
    },
  };

  const build: BuildOptions = {
    sourcemap: true,
    rollupOptions: {
      external: ['**/*.stories.tsx', '**/*.stories.js'], // Exclude Storybook stories
    },
  };

  const preview: Partial<PreviewOptions> = {
    host: COMMONS.HOST,
    port: COMMONS.PORT,
    strictPort: COMMONS.STRICT_PORT,
  };

  return defineConfig({
    base: './',
    envPrefix: COMMONS.ENV_PREFIX,
    plugins: [react({})],
    assetsInclude: [
      '**/*.png',
      '**/*.jpg',
      '**.*.JPG',
      '**/*.jpeg',
      '**/*.svg',
      '**/*.woff',
      '**/*.woff2',
      '**.*.ttf',
    ],
    build,
    server,
    preview,
    resolve: {
      alias: {
        '@': resolve(__dirname, '../src'),
      },
    },
  });
};
