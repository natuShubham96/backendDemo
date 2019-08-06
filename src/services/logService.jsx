import Raven from 'raven-js';

function init() {
  Raven.config('https://9aa614c184fb4b9f9ecd0a06afcd2033@sentry.io/1523025', {
    release: '1-0-0', //this release indicates the version of our application
    environment: 'development-test',
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
