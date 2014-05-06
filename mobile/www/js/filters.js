angular.module('starter.filters', [])
	.filter('currencySymbol', function (Currencies) {
		return function (name) {
			return Currencies[name].symbol_native;
		};
	});