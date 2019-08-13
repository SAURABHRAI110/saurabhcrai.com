import pkg from './package'
import {
  async
} from 'q';


const glob = require('glob');
// we acquire an array containing the filenames
// in the articles directory
let files = glob.sync('**/*.md', {
  cwd: 'articles'
});

// We define a function to trim the '.md' from the filename
// and return the correct path.
// This function will be used later
function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/blog/${slug}`;
}

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
        async: true,
        ssr: false

      },
      {
        src: "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v4.0",

        async: true,
        defer: true,
        crossorigin: "anonymous",
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

    title: 'Saurabh Rai | UX Designer & Front End Developer',
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
        rel: 'stylesheet',
        href: 'https://unpkg.com/applause-button/dist/applause-button.css'
      },
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
    {
      src: '~/node_modules/highlight.js/styles/foundation.css',
      lang: 'css'
    }

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
      src: "~/plugins/vue-agile",
      ssr: false
    },
    {
      src: '~/plugins/scrollmagic',
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
    '@nuxtjs/moment',

    ['@nuxtjs/google-analytics', {
      id: 'UA-138976237-1'
    }],
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/sitemap'
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
  generate: {
    routes: function () {
      return files.map(getSlugs)
    }
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

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
      config.node = {
        fs: "empty",
        glob: "empty"
      };


      /*
       ** You can extend webpack config here
       */
      // alias: { //Seção Alias
      //   ScrollMagicGSAP: "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"

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
