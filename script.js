var application = angular.module("mainApp", []);

//Custom Filter to change epoch to local date string
application.filter("dateFilter", () => {
  return (input) => {
    var myDate = new Date(input * 1000);
    return myDate.toDateString();
  };
});

//Factory to generate a random number on each click
application.factory("utility", () => {
  var randomObject = {};
  var num = Math.floor(Math.random() * 1000);
  randomObject.generate = () => {
    return num;
  };
  return randomObject;
});

//Custom Directive to change the input text to bold
application.directive("ngBold", () => {
  return {
    template:
      'You texted : <p style="font-weight:600;display: inline;">{{inputText}}</p>',
  };
});

//Application Controller
application.controller("app", ($scope, utility) => {
  $scope.generateRandom = () => {
    randNum = utility.generate();
    console.log(randNum);
    $scope.randomNumber = randNum;
  };
  var date = new Date();
  $scope.today = Math.floor(date.getTime() / 1000.0);
  $scope.inputText = "";
});
