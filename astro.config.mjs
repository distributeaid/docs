// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://distributeaid.github.io',
  integrations: [
    starlight({
      title: 'Distribute Aid Docs',
      logo: {
        src: './src/assets/da-logo.svg',
      },
      components: {
        // Override with empty component until we have a dark-mode logo
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/distributeaid/docs',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'How to DA',
          autogenerate: { directory: 'how-to-DA' },
        },
        {
          label: 'Needs Assessment',
          autogenerate: { directory: 'needs-assessment' },
        },
        {
          label: 'Website',
          autogenerate: { directory: 'website' },
        },
        {
          label: 'Aggregated Public Information',
          autogenerate: { directory: 'aggregated-public-information' },
        },
      ],
    }),
  ],
});
