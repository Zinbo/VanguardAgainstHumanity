angular.module('DeckBuilderApp').factory('CardFactory', ['$http', function($http) {      

	return {
		get : function() {
			return $http.get('/api/cards');
		},
		
		create : function(cardData) {
			return $http.post('/api/cards', cardData);
		},
		
		edit : function(cardData) {
			return $http.put('api/cards', cardData);
		},
		
		delete : function(id) {
			return $http.delete('/api/cards/' + id);
		}
	}
}]);