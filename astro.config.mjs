// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production';

  return {
    site: isProd
      ? 'https://abdul2025.github.io/astro_portfolio'
      : 'http://localhost:4321',

    base: isProd ? '/astro_portfolio/' : '/',
  };
});
