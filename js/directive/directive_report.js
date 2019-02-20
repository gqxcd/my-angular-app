angular.module('myApp')
// 饼图
.directive('eCharts', function() {
    return {
        restrict: 'A',
        link: function($scope, iElm) {
            var myChart = echarts.init(iElm[0]);
            $scope.$watch('options', function() {
                var options = $scope.options;
                myChart.setOption(options);
            });
        }
    };
})
// poi 折线图
.directive('poiChart', function() {
    return {
        restrict: 'A',
        link: function ($scope, iElm) {
            var poiChart = echarts.init(iElm[0]);
            $scope.$watch('poiOptions', function() {
                var poiOptions = $scope.poiOptions;
                poiChart.setOption(poiOptions);
            }); 
        }
    }
})
// 生效率折线图
.directive('operativeChart', function() {
    return {
        restrict: 'A',
        link: function ($scope, iElm) {
            var operativeChart = echarts.init(iElm[0]);
            $scope.$watch('OperateOptions', function() {
                var OperateOptions = $scope.OperateOptions;
                operativeChart.setOption(OperateOptions);
            });
        }
    }
});