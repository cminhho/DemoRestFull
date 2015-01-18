/**
 * Created by hmchung on 9/3/14.
 */
(function() {
	'use strict';


	/*
	 * var TaskFactory = function($cacheFactory, $resource){ var Task =
	 * $resource('/task/:taskid', {}, { get: { cache: true, method: 'get' } });
	 * return Task; };
	 */

	var ModalDemoCtrl = function($scope, $location, $http) {

	};

	var DashboardCtrl = function($scope, $modal, $log, customersService, Tasks,
			User) {

		$scope.existingCustomers = [];
		$scope.tasks = [];
		$scope.users = [];
		$scope.items = [ 'item1', 'item2', 'item3' ];

		$scope.dashboard = {
			cpu : {
				id : 0,
				title: 'CPU',
				cores : 3,
				used : 10
			},
			disk : {
				id : 0,
				title: 'DISK',
				cores : '10GB',
				used : '100GB'
			}
		};

		init();

		$scope.getData = function() {

			$scope.request = User.query();

		};

		function init() {
			/* getExistingCustomers(); */
			/* getUsers(); */
			getTasks();
		}

		function getTasks() {
			$scope.tasks = Tasks.query();
			console.log($scope.tasks);
		}
		;

		function getUsers() {
			customersService.getUsers().then(function(results) {
				$scope.users = results.data;
			}, function(error) {
				alert('error:' + error.message);
			})
		}

		function getExistingCustomers() {
			customersService.getExistingCustomers().then(function(results) {
				$scope.existingCustomers = results.data;
			}, function(error) {
				alert('error:' + error.message);
			});
		}

		$scope.open = function(size) {

			var modalInstance = $modal.open({
				templateUrl : 'app/dashboard/modal.html',
				controller : ModalInstanceCtrl,
				size : size,
				resolve : {
					items : function() {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function(selectedItem) {
				$scope.selected = selectedItem;
			}, function() {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	};

	// Please note that $modalInstance represents a modal window (instance)
	// dependency.
	// It is not the same as the $modal service used above.

	var ModalInstanceCtrl = function($scope, $modalInstance, items, $location,
			Tasks) {

		$scope.step = 1;
		$scope.items = items;
		$scope.title = '[]3A, 2D, 1 iness';
		
		$scope.template = 'Ubuntu 10.04 Plain 5GB';

		$scope.selected = {
			item : $scope.items[0]
		};

		$scope.ok = function() {
			var task = new Tasks({
				id : 10,
				title : $scope.title,
				cost : 12
			});
			task.$save();
			$modalInstance.close($scope.selected.item);
			$location.path('/');
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	};

	// Injection
	configDashboard.$inject = [ '$routeProvider' ];
	/* TaskFactory.$inject = ['$cacheFactory', '$resource']; */
	ModalDemoCtrl.$inject = [ '$scope', '$location', '$http' ];
	DashboardCtrl.$inject = [ '$scope', '$modal', '$log', 'customersService',
			'Tasks' ];

	// Module
	angular.module('module.dashboard.table',['ngResource', 'resource.tasks', 'resource.users'])
	/* .factory('Task', TaskFactory) */
	.controller('GribTableCtrl', DashboardCtrl
	.controller('ModalDemoCtrl',ModalDemoCtrl)

})();
