var api_key = "f0c595e13a64b16fbf5318fbe6872351";
var url_base = "https://api.themoviedb.org/3"
var idioma = "language=es-CO";

angular.module("movies", [])
.controller("AppController", function($scope, $http) {

   var search = "";
   $scope.anhos = [
      {id:"2004"},
      {id:"2005"},
      {id:"2006"},
      {id:"2007"},
      {id:"2008"},
      {id:"2009"},
      {id:"2010"},
      {id:"2011"},
      {id:"2012"},
      {id:"2013"},
      {id:"2014"},
      {id:"2015"},
      {id:"2016"},
      {id:"2017"},
      {id:"2018"},
      {id:"2019"}
   ];

   $http({
      method : "GET",
      url : url_base+"/movie/popular?api_key="+api_key+"&"+idioma+"&page=1"
   }).then(function(response) {
      $scope.movies = response.data.results;
      //   console.log( response.data )
      //   $scope.page = response.data.page;
      //   $scope.currentPage = response.data.total_pages;
      //   $scope.itemPerPage = response.data.total_results;

      // $scope.setItems = function(n){
      //    console.log("setItems", n);
      //    $scope.itemPerPage = n;
      // };
   }, function myError(response) {
      $scope.movies = response.statusText;
   });

   $http({
      method : "GET",
      url : url_base+"/genre/movie/list?api_key="+api_key+"&"+idioma
   }).then(function(response) {
      $scope.generos = response.data.genres;
   }, function myError(response) {
      $scope.generos = response.statusText;
   });

   $scope.submitMovies = function() {
      search = $scope.search.replace(/ /gi, "%20");
      $http({
         method : "GET",
         url : url_base+"/search/movie?api_key="+api_key+"&"+idioma+"&query="+search+"&page=1"
      }).then(function(response) {
         $scope.movies = response.data.results;
         // $scope.generos = response.data.genres;
      }, function myError(response) {
         $scope.generos = response.statusText;
      });
   }

   $scope.searchGenero = function() {
      $http({
         method : "GET",
         url : url_base+"/discover/movie?api_key="+api_key+"&with_genres="+$scope.selectedGenero
      }).then(function(response) {
         $scope.movies = response.data.results;
      }, function myError(response) {
         $scope.generos = response.statusText;
      });
   }

   $scope.searchanhio = function() {
      $http({
         method : "GET",
         url : url_base+"/discover/movie?api_key="+api_key+"&"+idioma+"&primary_release_year="+$scope.selectedanhio
      }).then(function(response) {
         $scope.movies = response.data.results;
      }, function myError(response) {
         $scope.generos = response.statusText;
      });
   }
});
