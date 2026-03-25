// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://distributeaid.github.io',
	integrations: [
		starlight({
			title: 'DistributeAid Docs',
			logo: {
				src: './src/assets/da-logo.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/distributeaid/docs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Needs Assessment',
					autogenerate: { directory: 'needs-assessment' },
				},
				{
					label: 'Next Website',
					autogenerate: { directory: 'next-website' },
				},
				{
					label: 'Aggregated Public Information',
					autogenerate: { directory: 'aggregated-public-information' },
				},
			],
		}),
	],
});
