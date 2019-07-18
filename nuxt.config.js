import pkg from './package'
import {
  async
} from 'q';

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {

    script: [{
        src: ' https://unpkg.com/applause-button/dist/applause-button.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        body: true,
        async: true

      },
      {
        src: 'https://rawcdn.githack.com/mburakerman/prognroll/0feda211643153bce2c69de32ea1b39cdc64ffbe/src/prognroll.js',
        body: true,
        async: true

      },
      {
        src: '/easescroll.js',
        body: true,
        async: true

      },
      {
        src: '/main.js',
        defer: true,
        body: true,
        async: true
      }

    ],

    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        name: 'theme-color',
        content: '#fc3a52'
      },

      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        iconSrc: 'static/icon.png',
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/applause-button/dist/applause-button.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fc3a52;',
    throttle: 0
  },

  /*
   ** Global CSS
   */
  css: [
    '@assets/css/main.css',

  ],



  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/rellax',
      ssr: false
    },
    {
      src: "~/plugins/aos",
      ssr: false
    },
    {
      src: "~/plugins/medium-zoom",
      ssr: false
    },
    {
      src: '~plugins/vue-carousel',
      ssr: false
    },
    {
      src: '~plugins/vue-smooth-scroll',
      ssr: false
    }




  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',

    ['@nuxtjs/google-analytics', {
      id: 'UA-138976237-1'
    }]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //     options: {
      //       fix: true
      //     }
      //   })
      // }
    }
  }
}
