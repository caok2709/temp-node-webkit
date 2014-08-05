/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['../module'], function (app) {
  'use strict';
    app.controller('OrdersController', function ($scope, customersService) {
        $scope.customers = [];
        //I like to have an init() for controllers that need to perform some initialization. Keeps things in
        //one place...not required though especially in the simple example below
        init();
        function init() {
            $scope.customers = customersService.getCustomers();
        }
    });
});