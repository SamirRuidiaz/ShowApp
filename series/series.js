var page = 0;

var api_key = "f0c595e13a64b16fbf5318fbe6872351";
var url_base = "https://api.themoviedb.org/3"
var idioma = "language=es-CO";

angular.module("series", [])
.controller("seriesController", function($scope, $http) {
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
      url : url_base+"/tv/popular?api_key="+api_key+"&"+idioma+"&page=1"
   }).then(function(response) {
      $scope.series = response.data.results;
   }, function myError(response) {
      $scope.series = response.statusText;
   });


   $http({
      method : "GET",
      url : url_base+"/genre/tv/list?api_key="+api_key+"&"+idioma
   }).then(function(response) {
      $scope.generos = response.data.genres;
   }, function myError(response) {
      $scope.generos = response.statusText;
   });

   $scope.submitSeries = function() {
      search = $scope.search.replace(/ /gi, "%20");
      $http({
         method : "GET",
         url : url_base+"/search/tv?api_key="+api_key+"&"+idioma+"&query="+search+"&page=1"
      }).then(function(response) {
         $scope.series = response.data.results;
      }, function myError(response) {
         $scope.series = response.statusText;
      });
   }

   $scope.searchGenero = function() {
      $http({
         method : "GET",
         url : url_base+"/discover/tv?api_key="+api_key+"&with_genres="+$scope.selectedGenero
      }).then(function(response) {
         $scope.series = response.data.results;
      }, function myError(response) {
         $scope.series = response.statusText;
      });
   }

   $scope.searchanhio = function() {
      $http({
         method : "GET",
         url : url_base+"/discover/tv?api_key="+api_key+"&"+idioma+"&first_air_date_year="+$scope.selectedanhio
      }).then(function(response) {
         $scope.series = response.data.results;
      }, function myError(response) {
         $scope.series = response.statusText;
      });
   }
});