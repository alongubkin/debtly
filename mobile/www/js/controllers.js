angular.module('debtly.controllers', [])
	.controller('MyDebtsCtrl', function ($scope) {
		$scope.debts = [
			{
				from: 'Deann Holt',
				amount: '50',
				currency: 'ILS',
				create_date: new Date("05/01/2014"),
				profile_picture_url: 'http://api.randomuser.me/portraits/women/51.jpg',
				description: 'BBB'
			},
			{
				from: 'Joe Bishop',
				amount: '40',
				currency: 'ILS',
				create_date: new Date("10/12/2013"),
				profile_picture_url: 'http://api.randomuser.me/portraits/men/46.jpg',
				description: 'Ice Cream'
			},
			{
				from: 'Alberto Rogers',
				amount: '257',
				currency: 'ILS',
				create_date: new Date("02/02/2014"),
				profile_picture_url: 'http://api.randomuser.me/portraits/men/92.jpg',
				description: 'meat'
			}			
		];
	})
	.controller('OwesMeCtrl', function ($scope) {
		$scope.debts = [
			{
				from: 'Deann Holt',
				amount: '50',
				currency: 'ILS',
				create_date: new Date("05/01/2014"),
				profile_picture_url: 'http://api.randomuser.me/portraits/women/51.jpg',
				description: 'BBB'
			},
			{
				from: 'Joe Bishop',
				amount: '40',
				currency: 'ILS',
				create_date: new Date("10/12/2013"),
				profile_picture_url: 'http://api.randomuser.me/portraits/men/46.jpg',
				description: 'Ice Cream'
			},
			{
				from: 'Alberto Rogers',
				amount: '257',
				currency: 'ILS',
				create_date: new Date("02/02/2014"),
				profile_picture_url: 'http://api.randomuser.me/portraits/men/92.jpg',
				description: 'meat'
			}			
		];
	})
	.controller('SettingsCtrl', function ($scope) {
	
	});