'use strict';

describe('Controller: AreasOfWorkCtrl', function () {

  // load the controller's module
  beforeEach(module('tomgrecoApp'));

  var AreasOfWorkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AreasOfWorkCtrl = $controller('AreasOfWorkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
