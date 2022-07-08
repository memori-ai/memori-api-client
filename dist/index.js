
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./memori-api-client.cjs.production.min.js')
} else {
  module.exports = require('./memori-api-client.cjs.development.js')
}
