/**
 * Created by hmchung on 9/11/14.
 */
(function () {
  'use strict';


  var navCtrl = function($scope, $modal, $log, TemplateResource){
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.demo = ['item1', 'item2', 'item3123'];
    $scope.templates = [
      {
        "_id" : "1",
        "_class" : "com.tma.model.Template",
        "name" : "Ubuntu 10.04 10GB",
        "os" : "Ubuntu 10.04",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "Plain"
      },
      {
        "_id" : "2",
        "_class" : "com.tma.model.Template",
        "name" : "Ubuntu 10.04 Plain 10GB",
        "os" : "Ubuntu 10.04",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "Plain"
      },
      {
        "_id" : "3",
        "_class" : "com.tma.model.Template",
        "name" : "Ubuntu 10.04 AMS 9.4 10GB",
        "os" : "Ubuntu 10.04",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "AMS"
      },
      {
        "_id" : "4",
        "_class" : "com.tma.model.Template",
        "name" : "Red hat 7 Plain 10GB",
        "os" : "Red hat 7",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "Plain"
      },
      {
        "_id" : "5",
        "_class" : "com.tma.model.Template",
        "name" : "Red hat 7 Plain 15GB",
        "os" : "Red hat 7",
        "diskSize" : 15,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "Plain"
      },
      {
        "_id" : "6",
        "_class" : "com.tma.model.Template",
        "name" : "Red hat 7 Plain 20GB",
        "os" : "Red hat 7",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "Plain"
      },
      {
        "_id" : "7",
        "_class" : "com.tma.model.Template",
        "name" : "Red hat 7 AMS 9.2 10GB",
        "os" : "Red hat 7",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "AMS 9.2"
      },
      {
        "_id" : "8",
        "_class" : "com.tma.model.Template",
        "name" : "Red hat 7 AMS 9.3 10GB",
        "os" : "Red hat 7",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "AMS 9.3"
      },
      {
        "_id" : "9",
        "_class" : "com.tma.model.Template",
        "name" : "Red hat 7 AMS 9.4 10GB",
        "os" : "Red hat 7",
        "diskSize" : 10,
        "cpuUsed" : 1,
        "ramSize" : 8,
        "app" : "AMS 9.4"
      }
    ];

    $scope.open = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'app/template/sidebar/reservation/modal.html',
        controller: ModalInstanceCtrl,
        size: size,
        resolve: {
          items: function () {
            return $scope.demo;
          },
          templates: function () {
            return $scope.templates;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

//    return $scope.AppCtrl = this;
  };


  var ModalInstanceCtrl = function ($scope, $modalInstance, items, templates) {

    $scope.items = items;

    $scope.templates = templates;

    $scope.selected = {
      step: 1,
      item: $scope.templates[0]
    };

    $scope.chooseTemplate = function(template){
      $scope.selected.item = template;
      $scope.setup= angular.copy($scope.selected.item);
    };



    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };



  var laptocloudNav = function(){

    var linkingSidebar = function(scope, element, attr){
      scope.demo = function(){

      };
    };

    return{
      restrict: 'A',
      templateUrl: 'app/template/nav/nav.html',
      link: linkingSidebar
    };
  };


  navCtrl.$inject = ['$scope', '$modal', '$log', 'Template'];
  ModalInstanceCtrl.$inject = ['$scope', '$modalInstance', 'items', 'templates'];

  angular
    .module('module.template.nav', ['resource.template'])
    .controller('navCtrl', navCtrl)
    .controller('ModalInstanceCtrl', ModalInstanceCtrl)
    .directive('laptocloudNav', laptocloudNav)

})();