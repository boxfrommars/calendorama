'use strict';

/**
 * @ngdoc overview
 * @name calendoramaApp
 * @description
 * # calendoramaApp
 *
 * Main module of the application.
 */
angular
  .module('calendoramaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',

    'ui.router'
  ])
  /* jshint ignore:start */
  .constant('moment', moment)
  .constant('_', _)
  /* jshint ignore:end */
;
