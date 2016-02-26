angular.module('calc', [])
  .config(function() {

  })
  .controller('calcController', function($http, $log, $scope, UtilsServ) {
    $scope.resultado_suma = UtilsServ.sumar(1, 2);
    var prom_val = UtilsServ.generar().then(function(data) {
      console.log("data:", data);
      return data;
    });

    $http.get('/data.json').then(function(data) {
      $log.log(data);
      debugger;
    }, function(err) {
      $log.log(err);
    })

  })
  .directive('calculadora', function(UtilsServ) {
    return {
      scope: true,
      restrict: 'EA',
      template: ' <h1>Res: {{resultado}}!</h1> <button ng-repeat="num in nums" ng-click="rem(num)">{{num}}</button>',
      link: function($scope, element, attrs) {
        console.log("Linked");
        $scope.resultado = '';
        $scope.nums = '123456789+-='.split('');

        $scope.$watch('resultado', function(oldval, newval) {
          console.log(newval);
        });

        $scope.rem = function(n) {
          if (n === '=') {
            $scope.resultado = UtilsServ.evaluar($scope.resultado);
          } else {
            $scope.resultado += n;
          }
        }
      }
    };
  }).factory('UtilsServ', function($q) {
    return {
      generar: function(param) {
        var res = $q.defer();
        setTimeout(function() {
          if (param == 'data') {
            res.resolve({
              data: 1
            });
          } else {
            res.reject();
          }
        }, 1000);
        return res.promise;
      },
      evaluar: function(expr) {
        return eval(expr);
      },
      sumar: function(a, b) {
        if(!a || !b){
          throw new Error("2 Params were expected");
        }
        return a + b;
      }
    }
  });
