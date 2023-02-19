import { defineConfig, UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import react from '@vitejs/plugin-react';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
} as VitestConfigExport);
