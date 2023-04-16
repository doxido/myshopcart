// vue.config.js
const { defineConfig } = require('@vue/cli-service')
require('dotenv').config()

//
const demo = ''

//Module Exports
module.exports = defineConfig({
  // options...
  pages: {
    index: {
      // entry for the page
      entry: `src/${demo}app.js`,
    }
}
})