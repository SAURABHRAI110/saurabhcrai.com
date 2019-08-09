---
title: Building a static blog with NuxtJs and Markdown as a beginner
published: true
description: A summary of my ongoing journey to get a statically generated blog up and running with the help of NuxtJS and Markdown
tags: javascript,vue,showdev,beginners
ctime: 2019-05-12
---

> This post originally appeared on [Dev.to](https://dev.to/nirebu/building-a-static-blog-with-nuxtjs-and-markdown-as-a-beginner-pkf) when this site had yet to support functional blogging

Hi there, this is my first post here... or anywhere since I've never blogged before! I'm [Nicolò Rebughini](https://nirebu.com/), a sysadmin trying to get a hold of modern web development pratices. I've specialised in CS at high school, but had been a video post production tech for many years, and came back to the IT world a little more than a year ago wearing the sysadmin hat. Right now I'm updating myself and learning to use tools like [Ansible](https://ansible.com/) and [Docker](https://docker.com/) to standardise and streamline the stack of my workplace.

## Beginning of the journey

I left the development and operations worlds when Bootstrap's first version wasn't even released (Wikipedia says it happened in 2011), after exploring the now infinite options and experimenting for too much time I've finally made it: my [JAM Stack](https://jamstack.org/) blog is shaping up. You can also explore its source code on [my Github repo](https://github.com/nirebu/nirebu-2019/).

As a totally green web developer, I started this website with the tools I already knew, so I cobbled together a single `index.html` webpage and tried some new toys that have come a long way since I last went in and written something from scratch. [Explore the source](https://github.com/nirebu/nirebu-personal-website/) for the 2018 version on Github.

After being marveled by huge timesavers like hot reloading, the latest innovations in CSS frameworks (welcome [Bulma](https://bulma.io/)) and deploying it all for free on Firebase, I went on looking for means I could augment it through.

## Enter NuxtJS

Being brand new to all these new fancy Javascript frameworks I spent an absurd amount of time just by trying them out and experimenting with them, not counting the time spent just to get the hang of some obscure JS concepts.

Then... it finally clicked when I found about [NuxtJS](https://nuxtjs.org/).

This will be a summary of the things I had to do in order to make this website and blog work the way I wanted: static website, markdown blog posts and freely hosted (this time on [Netlify](https://netlify.com/))

## Creating a NuxtJS website

Initializing a new NuxtJS website is as easy as running a single command

```bash
# Run the create-nuxt-app without having to install it beforehand
npx create-nuxt-app my-markdown-blog
```

I set the `Nuxt mode` to `Universal` to reap the rewards of server side rendered Vue out of the box.

I wanted to replace my old website with this new (only under the hood) version, so I had to bring over the old source code, slapping the content of `index.html` in the `<template>` tag in `pages/index.vue`

## Loading Bulma

How the heck do I load Bulma here? Probably my solution isn't the cleanest or most elegant, but here it is:

```bash
npm install --save-dev bulma @nuxtjs/style-resources node-sass sass-loader
```

I had also some customisations over the stock Bulma framework so, in order to make it work, I copied over my `main.scss` in the `assets/` directory and changed a couple of things in `nuxt.config.js`:

```javascript
module.exports = {
  [...]
  css: ["assets/main.scss"] // This line instructs Nuxt to load this file in every page
  [...]
  modules: [
    "@nuxtjs/axios", // This was already present because I chose it during the init
    "@nuxtjs/style-resources" // Necessary to make Nuxt load the SCSS and SASS files
  ]
  [...]
}
```

After setting the correct path of the `bulma.sass` file in my `main.scss` all the styles fixed themselves. Yay! Success! (After hours of trial and error)

## Refactoring website header and footer in components

To take advantage of the intrinsic modularisation of Nuxt, I split the navbar and the footer in separate components, so I could use them in the default layout for the pages.

After this, my `layouts/default.vue` file looks like this:

```html
<template>
  <div class="main">
    <NavBar />
    <nuxt />
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar';
import SiteFooter from '~/components/SiteFooter';

export default {
  components:{
    NavBar,
    SiteFooter
  }
}
</script>
```

## Adding Markdown support

This has been a major pain point since I tried it the first time. The following is the way that I managed to set it up. If someone wants to show me the 'real' way, please make a PR to correct this article or my source, I'd be happy to learn about it.

Some preparations...

```bash
npm install --save-dev frontmatter-markdown-loader @nuxtjs/markdownit
```

Let's impart Webpack to read the Markdown files using the `raw-loader` in order to avoid any manipulation of the output.

```javascript
module.exports = {
  [...]
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    }
  }
  [...]
}
```

## Separating Markdown content and metadata

In the `pages/blog/_post/index.vue` file is where the magic happens (at least for me). Given the fact that `markdownit` doesn't support reading the markdown metadata, where the article info is stored, we need to decouple the process of getting the content and the attributes (as are called by front-matter):

```html
<script>
// Let's require the needed modules
const fm = require("front-matter");
var md = require("markdown-it")({
  html: true,
  typographer: true
});

export default {
  async asyncData({ params }) {
    // We read the markdown file by looking at the `post` parameter
    // in the URL and searching for a markdown file with that name in
    // the articles directory
    const fileContent = await import(`~/articles/${params.post}.md`);
    // We process the raw output through front-matter
    // (markdownit was giving me garbled results)
    let res = fm(fileContent.default);
    return {
      // attributes will be an object containing the markdown metadata
      attributes: res.attributes,
      // content will contain the body of the markdown file,
      // rendered in HTML via the `markdownit` class
      content: md.render(res.body)
    };
  }
};
</script>
```

With this data filled up, we can populate some elements:

```html
<template>
  <div :key="$route.params.post">
    <div class="container">
      <div class="columns is-centered">
        <div class="blog column is-10-tablet">
          <div class="title">{{ attributes.title }}</div>
          <div class="subtitle">
            Published on {{attributes.ctime}}
            by {{ attributes.author }}
          </div>
          <div v-html="content" class="blog-content content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
```

Right now, if you navigate to the path `blog/some-markdown-file` you should see the content and attributes displayed.

## Generating the routes for the blog posts

We are one step closer to having a statically generated blog powered by markdown but, before deploying, we have to make one extra step.

Nuxt, by default, generates only the routes found in the `pages/` directory, but it doesn't generate every dynamic page, only the index. So we have to find  a way to make it generate also the routes like:

- `blog/first-post` based on the file `articles/first-post.md`
- `blog/second-post` based on the file `articles/second-post.md`
- And so on

Let's dive in the `nuxt.config.js` once again. At the top I've configured it this way

```javascript
// glob is a small module to read 'globs', useful to get
// a filtered file list
const glob = require('glob');
// we acquire an array containing the filenames
// in the articles directory
let files = glob.sync( '**/*.md' , { cwd: 'articles' });

// We define a function to trim the '.md' from the filename
// and return the correct path.
// This function will be used later
function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/blog/${slug}`;
}
```

Then, edit the `generate` object in `nuxt.config.js` to add the routes obtained via the previous piece of code:

```javascript
module.exports = {
  [...]
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  }
  [...]
};
```

## Wrapping up

If I didn't forget anything, you should have at least a resemblance of a Markdown blog post viewer and you should be able to succesfully build all the pages and deploying your blog to your favourite static site hosting service.

The command `npm run generate` will get us the `build` directory containing our fresh statically generated website.

From this guide, and from my website, are missing **crucial** parts that I'm going to implement, like using Vuex to store all the blog posts metadata and using that info to render a list of articles. Right now I can only write single blog posts and link them somewhere. Expect an update or a new post about those also!

Thanks for reading!