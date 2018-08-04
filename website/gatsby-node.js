const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        stickyard: path.resolve(__dirname, '../src'),
      },
    },
  })
}
