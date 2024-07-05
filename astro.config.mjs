import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import favicons from "astro-favicons";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import betterImageService from "astro-better-image-service";
import compress from "astro-compress";
import pagefind from "astro-pagefind";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://beautyofmathematics.com',
  redirects: {
    '/love-and-mathematics-music-playlist': '/math-love-songs',
    '/infinity-netflix-documentary': '/a-trip-to-infinity-netflix-documentary-streaming-now',
    '/math--science-tattoo-inspiration-tom-crawford': '/math-science-tattoo-inspiration-tom-crawford',
    '/pride-cross-stitch-patterns-velebrating-the-beauty-of-math': '/pride-cross-stitch-patterns-celebrating-the-beauty-of-math',
    '/25-science-gifts/': '/category/memories/',
    '/carnival-of--mathematics/': '/carnival-of-mathematics-221'
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'night-owl'
    }
  },
  integrations: [favicons({
    masterPicture: "public/favicon.png",
    emitAssets: true,
    faviconsDarkMode: false,
    appName: "Beauty of Mathematics",
    // Your application's name. `string`
    appShortName: "Beauty of Mathematics",
    appDescription: "Mathematics blog taking you from math anxiety to math confdence",
    // Your application's description. `string`
    developerName: "Suzza Silver",
    // Your (or your developer's) name. `string`
    developerURL: "https://beautyofmathematics.com",
    // Your (or your developer's) URL. `string`
    lang: "en-US",
    // Primary language for name and short_name
    background: "#fff",
    // Background colour for flattened icons. `string`
    theme_color: "#D6BDE2",
    // Theme color user for example in Android's task switcher. `string`
    android: true,
    // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    appleIcon: true,
    // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    appleStartup: true,
    // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    favicons: true,
    // Create regular favicons. `boolean` or `{ offset, background }` or an  array of sources
    windows: true,
    // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    yandex: true // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
  }), tailwind(), mdx(), icon(), sitemap(), betterImageService(), compress({
    CSS: true,
    HTML: true,
    Image: false,
    JavaScript: true,
    SVG: false
  }),  compressor(), pagefind()]
});