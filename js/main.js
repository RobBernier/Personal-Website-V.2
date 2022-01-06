import './vendor/objectFitPolyfill.min.js';

import vueApp from './app.js';

window.$ = require('jquery');
window.jQuery = require('jquery');


$(() => {
  vueApp.initialize();
});
