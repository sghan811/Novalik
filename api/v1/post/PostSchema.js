module.exports = [
    {
      key: 'id',
      type: 'number',
      optional: true
    }, {
      key: 'title',
      type: 'string',
      regexp: /^\S*$/,
      regexpMessage: 'title cannot have spaces'
    }, {
      key: 'contant',
      type: 'string'
    }, {
      key: 'img',
      type: 'string',
    }, {
        key: 'uploader',
        type: 'string'
    }
  ]
  