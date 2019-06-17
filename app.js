var page = 0;

var token = "f0c595e13a64b16fbf5318fbe6872351"

angular.module("movies", [])
.controller("AppController", function($scope, $http) {
   $http({
      method : "GET",
      url : "http://54.210.155.46:8002/api/v1/municipality/"
   }).then(function(response) {
        $scope.movies = response.data;

        $scope.total = $scope.movies.length;
        
        console.log($scope.total)
        $scope.currentPage = 1;
        $scope.itemPerPage = 2;
        $scope.start = 0;


      $scope.setItems = function(n){
         console.log("setItems", n);
         $scope.itemPerPage = n;
      };
      // In case you can replace ($scope.currentPage - 1) * $scope.itemPerPage in <tr> by "start"
      $scope.pageChanged = function() {
         console.log("pageChanged", $scope.itemPerPage);
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
      url : "https://api.themoviedb.org/3/genre/movie/list?api_key="+token+"&language=en-US"
   }).then(function(response) {
      $scope.generos = response.data.genres;
      console.log(response.data.genres);
   }, function myError(response) {
      $scope.generos = response.statusText;
   });
}); 