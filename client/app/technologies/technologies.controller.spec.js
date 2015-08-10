'use strict';

describe('Controller: TechnologiesCtrl', function () {

  // load the controller's module
  beforeEach(module('tomgrecoApp'));

  var TechnologiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechnologiesCtrl = $controller('TechnologiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
