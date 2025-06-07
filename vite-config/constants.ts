export const COMMONS = {
  HOST: true,
  ENV_PREFIX: 'APP_',
  PORT: 8080,
  STRICT_PORT: true,
  WATCH: {
    USE_POOLING: true,
  },
  ROOT: './vite.config.ts',
} as const;

/* Modes */
export const MODES = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test',
} as const;
