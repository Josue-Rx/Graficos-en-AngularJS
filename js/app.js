var app = angular.module("kanban", ["chart.js"]); 

app.controller('ControladorPrincipal', ['$scope', function($scope){
    
    $scope.labels = [];
    $scope.series = ['Aviable','Committed'];

    $scope.data = [
      [10,000],
      [5,000]

    ];




}]); 

