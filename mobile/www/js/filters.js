angular.module('debtly.filters', [])
	.filter('currencySymbol', function (Currencies) {
		return function (name) {
			return Currencies[name].symbol_native;
		};
	});