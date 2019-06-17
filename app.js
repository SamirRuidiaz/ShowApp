var page = 0;

angular.module("movies", [])
.controller("AppController", function($scope, $http) {
   $http({
      method : "GET",
      url : "http://54.210.155.46:8002/api/v1/municipality/"
   }).then(function(response) {
        $scope.movies = response.data;

        $scope.total = $scope.mylist.length;     
        $scope.currentPage = 1;
        $scope.itemPerPage = 2;
        $scope.start = 0;


      $scope.setItems = function(n){
            $scope.itemPerPage = n;
      };
      // In case you can replace ($scope.currentPage - 1) * $scope.itemPerPage in <tr> by "start"
      $scope.pageChanged = function() {
         $scope.start = ($scope.currentPage - 1) * $scope.itemPerPage;
      }; 


   }, function myError(response) {
      $scope.movies = response.statusText;
   });
})
.controller("anhoController", function($scope, $http) {
   $http({
      method : "GET",
      url : "http://54.210.155.46:8002/api/v1/municipality/"
   }).then(function(response) {
      $scope.anhos = response.data;
   }, function myError(response) {
      $scope.anhos = response.statusText;
   });
})
.controller("generoController", function($scope, $http) {
   $http({
      method : "GET",
      url : "http://54.210.155.46:8002/api/v1/municipality/"
   }).then(function(response) {
      $scope.generos = response.data;
   }, function myError(response) {
      $scope.generos = response.statusText;
   });
});

//and our filter
module.filter('offset', function() {
   return function(input, start) {
     start = parseInt(start, 10);
     return input.slice(start);
   };
 }); 