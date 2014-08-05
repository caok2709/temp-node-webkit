//var app = angular.module('customersApp', ['ngRoute']);
var app = angular.module('customersApp', ['ui.router']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($stateProvider, $urlRouterProvider) {
    
    //For any unmatched url,redirect to index.html
    $urlRouterProvider
            .otherwise("/");
    $stateProvider
        .state('home',
            {
                url:'/',
                templateUrl: 'views/welcome.html'
            })
        .state('customers',
            {
                url:         '/customers',
                controller:  'CustomersController',
                templateUrl: 'views/customers.html'
            })
        .state('orders',
            {
                url:         '/orders',
                controller:  'OrdersController',
                templateUrl: 'views/orders.html'
            })            
        //Define a route that has a route parameter in it (:customerID)
        .state('customerorders',
            {
                url:         '/customerorders/:customerId',
                controller:  'CustomerOrdersController',
                templateUrl: 'views/customerOrders.html'
            })
        //Define a route that has a route parameter in it (:customerID)
});

/*
app.config(function ($routeProvider) {
    $routeProvider
        .when('/customers',
            {
                controller: 'CustomersController',
                templateUrl: '/app/partials/customers.html'
            })
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: '/app/partials/orders.html'
            })            
        //Define a route that has a route parameter in it (:customerID)
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/app/partials/customerOrders.html'
            })
        //Define a route that has a route parameter in it (:customerID)

        .otherwise({ redirectTo: '/customers' });
});
 */