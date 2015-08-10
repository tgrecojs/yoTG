'use strict';

angular.module('tomgrecoApp')
    .factory('Contacts', function($http) {
        return {
            get: function() {
                return $http.get('/api/contacts');
            },
            create: function(formData) {
                return $http.post('/api/contacts', formData);
            },
            delete: function(id) {
                return $http.delete('/api/contacts/' + id);
            }
        };
    })
    .controller('ContactCtrl', function($scope, $http, Contacts) {
        $scope.message = 'Hello';

        var formData = {};
        $scope.createUser = function() {
            if ($scope.formData != undefined) {
                Contacts.create($scope.formData)

                .success(function(data) {
                    $scope.contacts = data;
                    $scope.formData = {};
                    $scope.myForm.$setPristine(true);

                });

            }
        };
    });