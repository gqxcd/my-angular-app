angular.module('myApp')
// 饼图数据
.factory('pieApiService', function($http){
    var pieApi = {};
    pieApi.getOptions = function () {
        return $http({
            method: 'GET',
            url: '/api/pieOptions.json'
        });
    };
    return pieApi;
})
// poi 折线图数据
.factory('poiApiService', function($http){
    var poiApi = {};
    poiApi.getOptions = function () {
        return $http({
            method: 'GET',
            url: '/api/poiData.json'
        });
    };
    return poiApi;
})
// 生效率趋势图
.factory('operativeRateApiService', function($http){
    var operativeRateApi = {};
    operativeRateApi.getOptions = function () {
        return $http({
            method: 'GET',
            url: 'api/operativeRate.json'
        });
    };
    return operativeRateApi;
})
// Top表格数据
.factory('topProblemApiService', function($http){
    var topProblemApi = {};
    topProblemApi.getOptions = function () {
        return $http({
            method: 'GET',
            url: 'api/topProblem.json'
        });
    };
    return topProblemApi;
})