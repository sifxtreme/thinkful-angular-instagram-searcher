angular.module('instagramSearchApp', [])
	.controller('InstagramSearchController', function($scope, $http){
		
		$scope.getInstagramResults = function(text){
			var url = 'https://api.instagram.com/v1/tags/'+ $scope.searchTerm +'/media/recent';
			var request = {
				callback: 'JSON_CALLBACK',
				client_id: '2897297205c64c28bb12e13ca1be5332'
			};

			$http({
				method: 'JSONP',
				url: url,
				params: request
			}).
			success(function(result){
				$scope.results = result.data;
				console.log($scope.results.length);
			}).
			error(function(result){
				console.log("ERROR MAN");
				console.log(result);

			});

		};

	

	});



// CLIENT ID	2897297205c64c28bb12e13ca1be5332
// CLIENT SECRET	90f88453be444f21b56fedf3980563bd
// WEBSITE URL	http://sifxtreme.github.io/thinkful-angular-instagram-searcher/
// REDIRECT URI	http://sifxtreme.github.io/thinkful-angular-instagram-searcher/