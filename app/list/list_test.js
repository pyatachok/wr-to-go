'use strict';

describe('myApp.list module', function() {

  beforeEach(module('myApp.list'));

  describe('performance list controller', function(){

    it('should create performance models ', inject(function($controller) {
      //spec body
	  var scope = {};
      var ListCtrl = $controller('ListCtrl', {$scope:scope});
      expect(ListCtrl).toBeDefined();
	  expect(scope.performances.length).toBeGreaterThan(0);

    }));

  });
});