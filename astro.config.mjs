// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    build: { target: 'es2018' },
  }
});
