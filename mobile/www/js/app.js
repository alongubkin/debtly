angular.module('debtly', ['ionic', 'angularMoment', 'debtly.controllers', 'debtly.services', 'debtly.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.myDebts', {
      url: '/my-debts',
      views: {
        'tab-myDebts': {
          templateUrl: 'templates/tab-my-debts.html',
          controller: 'MyDebtsCtrl'
        }
      }
    })

    .state('tab.owesMe', {
      url: '/owes-me',
      views: {
        'tab-owesMe': {
          templateUrl: 'templates/tab-owes-me.html',
          controller: 'OwesMeCtrl'
        }
      }
    })
	
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    });	

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/my-debts');

});

