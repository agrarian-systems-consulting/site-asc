// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://agrarian-systems.org',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  redirects: {
    '/projets/diagnostic-des-dynamiques-agraires-7-regions-du-panama-piasi-preparation/': '/projets/chef-de-projet-18-diagnostics-agraires-piasi-au-panama/',
    '/projets/3-diagnostics-agraires-preparatoires-programme-piasi/': '/projets/chef-de-projet-18-diagnostics-agraires-piasi-au-panama/',
    '/projets/formation-action-diagnostic-agraire-comarcas-indigenes-panama/': '/projets/chef-de-projet-18-diagnostics-agraires-piasi-au-panama/',
    '/projets/diagnostics-agraires-nargana-alanje-capitalisation-piasi/': '/projets/chef-de-projet-18-diagnostics-agraires-piasi-au-panama/',
  },
  build: {
    format: 'directory',
  },
});
