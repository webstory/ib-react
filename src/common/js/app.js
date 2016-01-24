/* global requirejs */
'use strict';

const local = '/ib-react/app/vendor/';
const cloudflare = 'https://cdnjs.cloudflare.com/ajax/libs/';
const jsdelivr = 'https://cdn.jsdelivr.net/';
const osscdn = 'https://oss.maxcdn.com/';
const google = 'https://ajax.googleapis.com/ajax/libs/';

requirejs.config({
  paths: {
    'jquery': [
      local+'jquery/dist/jquery.min',
      google+'jquery/2.1.4/jquery.min',
      osscdn+'jquery/2.1.4/jquery.min',
      jsdelivr+'jquery/2.1.4/jquery.min',
      cloudflare+'jquery/2.1.4/jquery.min'
    ],
    'lodash': [
      local+'lodash/lodash.min',
      cloudflare+'lodash.js/4.0.0/lodash.min',
      jsdelivr+'lodash.js/4.0.0/lodash.min',
      osscdn+'lodash/4.0.0/lodash.min'
    ],
    'oboe': [
      local+'oboe/dist/oboe-browser.min',
      cloudflare+'oboe.js/2.1.2/oboe-browser.min'
    ],
    'react': [
      local+'react/react.min',
      cloudflare+'react/0.14.6/react.min',
      jsdelivr+'react/0.14.6/react.min',
      osscdn+'react/0.14.6/react.min'
    ],
    'react-dom': [
      local+'react/react-dom.min',
      cloudflare+'react/0.14.6/react-dom.min',
      jsdelivr+'react/0.14.6/react-dom.min',
      osscdn+'react/0.14.6/react-dom.min'
    ],
    'react-bootstrap': [
      local+'react-bootstrap/react-bootstrap.min'
    ],
    'bootstrap': [
      local+'bootstrap/dist/js/bootstrap.min',
      cloudflare+'twitter-bootstrap/3.3.5/js/bootstrap.min',
      jsdelivr+'bootstrap/3.3.5/js/bootstrap.min',
      osscdn+'bootstrap/3.3.5/js/bootstrap.min'
    ]
  },

  shim: {
    'lodash': { exports:'_' },
    'socketio': { exports:'io' },
    'react': { exports:'React' },
    'react-dom': { deps:['react'], exports:'ReactDOM' },
    'react-bootstrap': { deps:['react', 'bootstrap'] },
    'oboe': { exports:'oboe' },
    'bootstrap': { deps: ['jquery'] }
  }

});

require(["jquery"], ($) => {

  $.ajaxSetup({
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  });

});
