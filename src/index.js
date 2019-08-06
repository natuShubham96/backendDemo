import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

Raven.config ('https://9aa614c184fb4b9f9ecd0a06afcd2033@sentry.io/1523025', {
  release: '1-0-0', //this release indicates the version of our application
  environment: 'development-test',
}).install ();

ReactDOM.render (<App />, document.getElementById ('root'));
registerServiceWorker ();
