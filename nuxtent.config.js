// write your routing/structure here.

const postContentOptions = {
  permalink: ':slug',
  generate: [ // for static build
    'get', 'getAll'
  ],
  page: '/posts/_slug',
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
