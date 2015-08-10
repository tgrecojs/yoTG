'use strict';

angular.module('tomgrecoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('technologies', {
        url: '/technologies',
        templateUrl: 'app/technologies/technologies.html',
        controller: 'TechnologiesCtrl'
      });
  });