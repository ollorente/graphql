import { config } from "dotenv";
config();

export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          "https://res.cloudinary.com/dlktbgcnw/image/upload/v1548211666/favicon.ico"
      },
      {
        rel: "stylesheet",
        src: "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/146baeab33.js",
        crossorigin: "anonymous"
      },
      {
        src: "https://cdn.tailwindcss.com"
      }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    "@nuxtjs/dotenv",
    // https://momentjs.com
    "@nuxtjs/moment"
  ],

  moment: {
    defaultLocale: "es",
    locales: ["es"],
    defaultTimezone: "America/Bogota"
  },

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  //
  env: {
    // VUE_APP_API_URL: process.env.VUE_APP_API_URL
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: []
};
