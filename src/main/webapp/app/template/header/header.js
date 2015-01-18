/**
 * Created by hmchung on 9/9/14.
 */
(function () {
  'use strict';

  var amsHeader = function () {

    var linkingHeader = function(scope, element, attr){
      scope.header = {
        title: attr.amsHeaderTitle,
        logo: attr.amsHeaderLogo
      };
    };

    return{
      restrict: 'A',
      templateUrl: 'app/template/header/header1.html',
      link: linkingHeader
    };
  };

  angular
    .module('LapToCloudApp')
    .directive('amsHeader', amsHeader)


})();