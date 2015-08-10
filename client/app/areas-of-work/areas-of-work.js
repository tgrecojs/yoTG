'use strict';

angular.module('tomgrecoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areas-of-work', {
        url: '/areas-of-work',
        templateUrl: 'app/areas-of-work/areas-of-work.html',
        controller: 'AreasOfWorkCtrl'
      });
  });