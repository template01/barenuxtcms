// write your routing/structure here.

const postContentOptions = {
  permalink: '/posts/:slug',
  generate: [ // for static build
    'get', 'getAll'
  ],
  page: '',
  isPost: false
}

module.exports = {
  // endpoints with options from above
  content: [['_post', postContentOptions]],

  api: {
    baseURL: ''
  }
}
