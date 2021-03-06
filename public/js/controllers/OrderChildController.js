/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['../module'], function (app) {
  'use strict';
    app.controller('OrderChildController', function ($scope) {
        $scope.orderby = 'product';
        $scope.reverse = false;
        $scope.ordersTotal = 0.00;

        init();

        function init() {
            //Calculate grand total
            //Handled at this level so we don't duplicate it across parent controllers
            if ($scope.customer && $scope.customer.orders) {
                var total = 0.00;
                for (var i = 0; i < $scope.customer.orders.length; i++) {
                    var order = $scope.customer.orders[i];
                    total += order.orderTotal;
                }
                $scope.ordersTotal = total;
            }
        }
        $scope.setOrder = function (orderby) {
            if (orderby === $scope.orderby)
            {
                $scope.reverse = !$scope.reverse;
            }
            $scope.orderby = orderby;
        };
    });
});