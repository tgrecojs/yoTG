'use strict';

angular.module('tomgrecoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'mailchimp',
  'ngMessages',
  'angular-flexslider'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });