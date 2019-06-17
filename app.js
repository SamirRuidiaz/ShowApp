var page = 0;

var api_key = "f0c595e13a64b16fbf5318fbe6872351";
var url_base = "https://api.themoviedb.org/3"
var idioma = "language=es-CO";

angular.module("movies", [])
.controller("AppController", function($scope, $http) {
   $http({
      method : "GET",
      url : url_base+"/movie/popular?api_key="+api_key+"&"+idioma+"&page=1"
   }).then(function(response) {
        $scope.movies = response.data.results;

        console.log( response.data )
      //   $scope.page = response.data.page;
      //   $scope.currentPage = response.data.total_pages;
      //   $scope.itemPerPage = response.data.total_results;

      $scope.setItems = function(n){
         console.log("setItems", n);
         $scope.itemPerPage = n;
      };


      // $scope.count = 0;
      $scope.myFunction = function(n) {
         console.log("setItems", n);
         // $scope.count++;
      }
      


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
      url : url_base+"/genre/movie/list?api_key="+api_key+"&"+idioma
   }).then(function(response) {
      $scope.generos = response.data.genres;
   }, function myError(response) {
      $scope.generos = response.statusText;
   });
});