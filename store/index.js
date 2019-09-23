// import moment from 'moment'

// export const state = () => ({
//   bloglist: []
// });

// export const mutations = {
//   set(state, list) {
//     state.bloglist = list;
//   }
// };

// export const actions = {
//   /*
//       nuxtServerInit will run everytime the app is launched or navigated
//       directly from the browser (not when using the <nuxt-link> component)

//       This function will read the articles folder and commit to the store
//       the attributes (maybe it will also store the article contents)
//       so we can render the blog page in the right order and also
//       navigate back to it
//     */
//   async nuxtServerInit({
//     commit
//   }) {
//     const fm = require('front-matter');

//     var files = await require.context('~/articles/', false, /\.md$/);
//     var posts = files.keys().map(key => {
//       var res = files(key);
//       res.slug = key.slice(2, -3);
//       return res;
//     }).map(post => {
//       let attributes = fm(post.default).attributes;
//       attributes.slug = post.slug;
//       attributes.ctime_unformatted = attributes.ctime;
//       attributes.ctime = moment(attributes.ctime).format('YYYY-MM-DD');
//       return attributes;
//     }).sort((a, b) => {
//       return b.ctime_unformatted - a.ctime_unformatted;
//     })
//     await commit('set', posts);
//   }
// };
