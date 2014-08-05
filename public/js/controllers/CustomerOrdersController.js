/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['../module'], function (app) {
  'use strict';
    app.controller('CustomerOrdersController', function ($scope, $stateParams, customersService) {
        $scope.customer = {};
        $scope.ordersTotal = 0.00;
        //I like to have an init() for controllers that need to perform some initialization. Keeps things in
        //one place...not required though especially in the simple example below
        init();
        function init() {
            //Grab customerID off of the route        
            var customerID = ($stateParams.customerId) ? parseInt($stateParams.customerId) : 0;
            if (customerID > 0) {
                $scope.customer = customersService.getCustomer(customerID);
            }
        }
    });
});