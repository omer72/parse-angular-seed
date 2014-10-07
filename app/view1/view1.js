'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
        $scope.userList = [];
        loadUsers();
        $scope.createUser = function(){
            Parse.Object.extend({
                className: "User",
                attrs: ['username', 'password', 'email','phone']
            });


            var user = new Parse.Object("User");
// You can do :
            user.set("username", $scope.user.username);
            user.set("password", $scope.user.password);
            user.set("email", $scope.user.email);

// other fields can be set just like with Parse.Object
            user.set("phone", $scope.user.phone);

            user.signUp(null, {
                success: function(user) {
                    loadUsers();
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }

        function loadUsers(){
            $scope.userList = [];
            var collection = Parse.Collection.extend({
                model: Parse.User
            });

            var myUsers = new collection();
            myUsers.query = new Parse.Query(Parse.User);
            myUsers.query.limit(50);
// Let's load the 50 first users in our collection
            myUsers.fetch({
                success: function(collection) {
                    collection.each(function(object) {
                        $scope.userList.push(object);
                    });
                },
                error: function(collection, error) {
                    // The collection could not be retrieved.
                }
            })
        }
}]);