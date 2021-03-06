const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'));
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
};
