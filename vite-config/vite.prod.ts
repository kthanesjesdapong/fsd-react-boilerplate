import type { BuildOptions } from 'vite';

export const build: BuildOptions = {
  sourcemap: true,
  rollupOptions: {
    external: ['**/*.stories.tsx', '**/*.stories.js'], // Exclude Storybook stories
  },
};
