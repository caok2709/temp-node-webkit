/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['../module'], function (app) {
  'use strict';
    app.controller('NavbarController', function ($scope, $location) {
        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return true
            } else {
                return false;
            }
        }
    });
});