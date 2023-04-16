// vue.config.js
const { defineConfig } = require('@vue/cli-service')
require('dotenv').config()

//in case we slpit code source to multiple parts in the same project
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
