const builtAt = new Date().toISOString()
const path = require('path')
const {
  I18N
} = require('./locales/i18n-nuxt-config')
import blogsEn from './contents/en/blogsEn.js'



const productionUrl = {
  en: "/en",

};
const baseUrl = 'https://saurabhcrai.com';

export default {
  mode: 'universal',
  env: {
    baseUrl,
    productionUrl
  },

  head: {

    title: 'Saurabh Chandra Rai - UX Designer and Front-End Developer',

    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      {
        name: 'msapplication-TileColor',
        content: '#fc3a52'
      },
      {
        name: 'application-name',
        content: 'Saurabhcrai.com'
      },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/mstile-144x144.png'
      },
      {
        name: 'theme-color',
        content: '#fc3a52'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@saurabhcrai110'
      },
      {
        property: 'og:type',
        content: 'profile'
      },
      {
        property: 'og:updated_time',
        content: builtAt
      },

    ],

    link: [{
        iconSrc: 'static/icon.png',
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-57x57.png',
        sizes: '57x57'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-60x60.png',
        sizes: '60x60'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-72x72.png',
        sizes: '72x72'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-76x76.png',
        sizes: '76x76'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-114x114.png',
        sizes: '114x114'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-120x120.png',
        sizes: '120x120'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-144x144.png',
        sizes: '144x144'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-152x152.png',
        sizes: '152x152'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-180x180.png',
        sizes: '180x180'
      },
      {
        rel: 'mask-icon',
        type: 'image/png',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#fc3a52'
      },

      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/applause-button/dist/applause-button.css'
      },
    ],

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
        async: true,
        ssr: false

      },

      {
        src: '/easescroll.js',
        body: true,
        async: true,
        ssr: false

      },


      {
        src: '/main.js',
        defer: true,
        body: true,
        async: true
      }

    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fc3a52',
    throttle: 0
  },

  /*
   ** Global CSS
   */
  css: [
    '@assets/css/main.css',
    // 'normalize.css/normalize.css',
    {
      src: '~/node_modules/highlight.js/styles/foundation.css',
      lang: 'css'
    }

  ],


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
      src: "~/plugins/vue-agile",
      ssr: false
    },

    '~/plugins/lazyload',
    '~/plugins/globalComponents',

    {
      src: `~plugins/vimeo-player`,
      ssr: false
    },
    {
      src: '~/plugins/vue-parallax-js',
      ssr: false
    },

  ],



  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/moment',

    ['@nuxtjs/google-analytics', {
      id: 'UA-138976237-1'
    }],
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/sitemap',
    ['nuxt-i18n', I18N],
    'nuxt-webfontloader',


  ],
  // optimizedImages: {
  //   inlineImageLimit: -1,
  //   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  //   optimizeImages: false,
  //   optimizeImagesInDev: false,
  //   defaultImageLoader: 'img-loader',
  //   mozjpeg: {
  //     quality: 100
  //   },
  //   optipng: true,
  //   pngquant: {
  //     speed: 7,
  //     quality: [0.65, 0.8]
  //   },
  //   webp: {
  //     preset: 'default',
  //     quality: 85
  //   }
  // },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  },




  /*
   ** Build configuration
   */
  build: {

    extend(config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'contents'),
          options: {
            vue: {
              root: "dynamicMarkdown"
            }
          }
        }, {
          test: /\.(jpe?g|png)$/i,
          loader: 'responsive-loader',
          options: {
            placeholder: true,
            quality: 90,
            // size: 1400,
            adapter: require('responsive-loader/sharp')
          }
        },

        // {
        //   test: /\.(gif|svg)$/,
        //   loader: 'url-loader',
        //   query: {
        //     limit: 1000,
        //     name: 'img/[name].[hash:7].[ext]'
        //   }
        // }

      );
    },
    vendor: [
      'vue-vimeo-player'
    ],

  },
  generate: {
    routes: [
        // '404'
      ]
      .concat(blogsEn.map(w => `/blog/${w}`))

  }
}
