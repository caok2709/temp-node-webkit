/**
 * Home controller definition
 * scope Controllers
 */

define(['../module'], function (app) {
  'use strict';
  app.controller('HomeController', function ($scope) {
    $scope.twoTimesTwo = 2 * 2;
  });
});