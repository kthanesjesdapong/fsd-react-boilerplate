import type { ConfigEnv, UserConfigExport } from 'vite';
import baseConfig from './vite-config/vite.common';

export default (env: ConfigEnv): UserConfigExport => baseConfig(env);
