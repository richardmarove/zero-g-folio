// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/about': {
      status: 301,
      destination: '/#about'
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['nonconsistorial-verlene-subdorsally.ngrok-free.dev']
    }
  }
});
