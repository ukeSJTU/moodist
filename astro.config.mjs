import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://ukeSJTU.github.io',
  base: '/moodist',
  integrations: [
    react(),
    AstroPWA({
      manifest: {
        background_color: '#09090b',
        description: 'Ambient sounds for focus and calm.',
        display: 'standalone',
        icons: [
          ...[72, 128, 144, 152, 192, 256, 512].map(size => ({
            sizes: `${size}x${size}`,
            src: `/moodist/assets/pwa/${size}.png`,
            type: 'image/png',
          })),
        ],
        name: 'Moodist',
        orientation: 'any',
        scope: '/moodist/',
        short_name: 'Moodist',
        start_url: '/moodist/',
        theme_color: '#09090b',
      },
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*'],
        maximumFileSizeToCacheInBytes: Number.MAX_SAFE_INTEGER,
        navigateFallback: '/moodist/',
      },
    }),
  ],
});
