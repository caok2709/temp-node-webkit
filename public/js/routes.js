/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

//config.js is used for including ui-router.
//define(['./public/js/app','./public/js/config'], function (app) {
define(['./app','./config'], function (app) {
  'use strict';
  app.config(function ($stateProvider, $urlRouterProvider) { 
      
      // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
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
            });
      
      //Define a route that has a route parameter in it (:customerID)
  });
});
/*
  app.config(function ($stateProvider, $urlRouterProvider) { 
//
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home',{
        url:'/',
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'
    })
    .state('state1', {
        url: "/state1",
        templateUrl: "views/home/state1.html"
    })
    .state('state1.list', {
        url: "/list",
        templateUrl: "views/home/state1.list.html",
        controller: 'state1-list-ctrl'
    })
    .state('state2', {
        url: "/state2",
        templateUrl: "views/home/state2.html"
    })
    .state('state2.list', {
        url: "/list",
        templateUrl: "views/home/state2.list.html",
        controller: 'state2-list-ctrl'
    });
    
  });
 */

/*
define(['./app','./config'], function (app) {
  'use strict';
  app.config(function ($routeProvider) { 
      
    $routeProvider.when('/', {
      templateUrl: 'views/home/home.html',
      controller : 'HomeController'
    });
    $routeProvider.when('/state1', {
      templateUrl: 'views/home/state1.html'
    });
    $routeProvider.when('/state1.list', {
      templateUrl: 'views/home/state1.list.html',
      controller : 'state1-list-ctrl'
    });
    $routeProvider.when('/state2', {
      templateUrl: 'views/home/state2.html'
    });
    $routeProvider.when('/state2.list', {
      templateUrl: 'views/home/state2.list.html',
      controller : 'state2-list-ctrl'
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
});
 */