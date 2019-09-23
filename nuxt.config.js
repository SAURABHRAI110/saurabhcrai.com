
const builtAt = new Date().toISOString()
const path = require('path')
const { I18N } = require('./locales/i18n-nuxt-config')
import blogsEn from './contents/en/blogsEn.js'
import blogsEs from './contents/es/blogsEs.js'


const productionUrl = {
  en: "/en",
  es: "/es"
};
const baseUrl = 'https://saurabhcrai.com';

export default {
  mode: 'universal',
  env: {
    baseUrl,
    productionUrl
  },

  head: {

    title: 'Saurabh Rai | UX Designer & Front-end Developer',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
      { name: 'theme-color', content: '#fc3a52' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@saurabhcrai110' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt },

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
      rel: 'stylesheet',
      href: 'https://unpkg.com/applause-button/dist/applause-button.css'
    },
    ]
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

  ],

  styleResources: {
    scss: [
      '@/assets/css/utilities/_variables.scss',
      '@/assets/css/utilities/_helpers.scss',
      '@/assets/css/base/_grid.scss',
      '@/assets/css/base/_buttons.scss'
    ],
  },

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

    '@nuxtjs/style-resources',
  ],
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: false,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80
    },
    optipng: true,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      preset: 'default',
      quality: 85
    }
  },

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
          quality: 60,
          size: 1400,
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
    }

  },
  generate: {
    routes: [
      '/es', '404'
    ]
      .concat(blogsEn.map(w => `/blog/${w}`))
      .concat(blogsEs.map(w => `es/blog/${w}`))
  }
}
