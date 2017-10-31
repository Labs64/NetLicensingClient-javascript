var os = require('os');
const isDocker = require('is-docker')();

module.exports = function(config) {
  var browsers = ['Chrome'];
  if (!isDocker) browsers.push('Firefox');
  if (os.platform() == 'win32') browsers.push('Edge');

  config.set({
    browsers: browsers,
    frameworks: ['jasmine'],
    customLaunchers: {
      Chrome: {
        base: 'ChromeHeadless',
        // We must disable the Chrome sandbox when running Chrome inside Docker
        // Chrome's sandbox needs more permissions than Docker allows by default
        flags: isDocker ? ['--no-sandbox'] : []
      }
    },
    files: [
      'src/util/*.js',
      'src/entities/*.js',
      'src/vo/*.js',
      'src/services/*.js',
      'test/**/*.js'
    ]
  });
};
