const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    'src': path.resolve(__dirname, 'src'),
    'public': path.resolve(__dirname, 'frontend/public'),
  };
  return config;
};

module.exports.paths = function (paths, env) {
  paths.appPublic = path.resolve(__dirname, 'frontend/public');
  paths.appHtml = path.resolve(__dirname, 'frontend/public/index.html');
  return paths;
};
