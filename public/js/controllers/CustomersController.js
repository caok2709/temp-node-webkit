/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['../module'], function (app) {
  'use strict';
    app.controller('CustomersController', function ($scope, customersService) {

        //I like to have an init() for controllers that need to perform some initialization. Keeps things in
        //one place...not required though especially in the simple example below
        init();

        function init() {
            $scope.customers = customersService.getCustomers();
        }

        $scope.insertCustomer = function () {
            var firstName = $scope.newCustomer.firstName;
            var lastName = $scope.newCustomer.lastName;
            var city = $scope.newCustomer.city;
            var address = $scope.newCustomer.address;

            customersService.insertCustomer(firstName, lastName, city, address);
            $scope.newCustomer.firstName = '';
            $scope.newCustomer.lastName = '';
            $scope.newCustomer.city = '';
            $scope.newCustomer.address = '';
        };

        $scope.deleteCustomer = function (id) {
            customersService.deleteCustomer(id);
        };
    });
});