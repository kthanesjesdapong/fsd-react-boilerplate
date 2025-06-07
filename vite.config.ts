import type { ConfigEnv, UserConfigExport } from 'vite';
import baseConfig from './vite-config/vite.common.ts';

export default (env: ConfigEnv): UserConfigExport => baseConfig(env);
