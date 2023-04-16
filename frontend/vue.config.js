// vue.config.js
const { defineConfig } = require('@vue/cli-service')

const demo = ''

module.exports = defineConfig({
  // options...
  pages: {
    index: {
      // entry for the page
      entry: `src/${demo}app.js`,
    }
}
})