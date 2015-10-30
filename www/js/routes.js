angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('tabsController.ordersAndRequests', {
      url: '/home',
      views: {
        'tab1': {
          templateUrl: 'templates/ordersAndRequests.html',
          controller: 'ordersAndRequestsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cartTabDefaultPage', {
      url: '/page5',
      views: {
        'tab2': {
          templateUrl: 'templates/cartTabDefaultPage.html',
          controller: 'cartTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cloudTabDefaultPage', {
      url: '/page6',
      views: {
        'tab3': {
          templateUrl: 'templates/cloudTabDefaultPage.html',
          controller: 'cloudTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page3',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('orderDetails', {
      url: '/page8',
      templateUrl: 'templates/orderDetails.html',
      controller: 'orderDetailsCtrl'
    })
        
      
    
      
        
    .state('trackTechnician', {
      url: '/trackTechnician',
      templateUrl: 'templates/trackTechnician.html',
      controller: 'trackTechnicianCtrl'
    })
        
      
    
      
        
    .state('serviceRequest', {
      url: '/page10',
      templateUrl: 'templates/serviceRequest.html',
      controller: 'serviceRequest'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});