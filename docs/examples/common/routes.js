'use strict'

module.exports = [
  {
    prefix: '/todo',
    pin: 'role:todo,cmd:*',
    map: {
      list: true,
      edit: {
        GET: true
      },
      test: {
        POST: true,
        suffix: '/:name'
      }
    }
  },
  {
    prefix: '/admin',
    pin: 'role:admin,cmd:*',
    map: {
      validate: {
        POST: true,
        alias: '/manage'
      }
    }
  }
]
