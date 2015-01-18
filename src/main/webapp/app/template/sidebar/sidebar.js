/**
 * Created by hmchung on 9/11/14.
 */
(function () {
  'use strict';



  var sidebarCtrl = function($modal, $log, Template){
	  this.sayHi = function(){
		  console.log();
	  };
		
	  this.open = function(size) {

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
    
    
    

//    return $scope.AppCtrl = this;
  };

  var directives = {};

  directives.amsNavSidebar = function(){

    var linkingSidebar = function(scope, element, attr){
      scope.demo = function(){

      };
    };

    return{
      restrict: 'A',
      templateUrl: 'app/template/sidebar/sidebar.html',
      link: linkingSidebar
    };
  };

  sidebarCtrl.$inject = ['$modal', '$log', 'Template'];
  
  angular
    .module('module.template.sidebar', ['ngResource', 'resource.template'])
    .controller('sidebarCtrl', sidebarCtrl)
    .directive(directives)
    

})();