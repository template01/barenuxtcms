// write your routing/structure here.

const postContentOptions = {
  permalink: '/posts/:slug',
  generate: [ // for static build
    'get', 'getAll'
  ],
  isPost: false
}

module.exports = {
  // endpoints with options from above
  content: [['_post', postContentOptions]],

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000'
      : 'http://localhost:3000'
  }
}
