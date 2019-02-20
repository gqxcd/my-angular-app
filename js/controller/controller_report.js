angular.module('myApp')
// 筛选部分
.controller('selectBar', function ($scope) {
    $scope.productLine = 'option 1';
    $scope.productLineChanged = function() {
        console.log('product: ' + $scope.productLine);
    };
   // 监听时间的广播函数
    $scope.$on('startDateChange', function (event, msg) {
        $scope.startDate = msg;
        console.log('startDateChange: ', $scope.startDate);
    });
    $scope.$on('endDateChange', function (event, msg) {
        $scope.endDate = msg;
        console.log('endDateChange: ', $scope.endDate);
    });
    // $scope.submit = function() {
    //     $scope
    // };
})
// 市场覆盖率饼图
.controller('PieController', function ($scope, pieApiService){
    $scope.options = {};
    pieApiService.getOptions().success(function (rs) {
        $scope.options = rs;
    });
})
// poi 折线图
.controller('PoiController', function ($scope, poiApiService){
    $scope.poiOptions = {};
    poiApiService.getOptions().success(function (rs) {
        $scope.poiOptions = rs;
    });
})
// 生效率趋势图
.controller('OperativeRateController', function ($scope, operativeRateApiService) {
    $scope.OperateOptions = {};
    operativeRateApiService.getOptions().success(function (rs) {
        $scope.OperateOptions = rs;
    });
})
// ng-Grid
.controller('GridDemoCtrl', function($scope, topProblemApiService) {
    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    };
    $scope.totalServerItem = 0;
    $scope.pagingOptions = {
        pageSizes: [250, 500, 1000],
        pageSize: 250,
        currentPage: 1
    };
    $scope.setPagingData = function (data, page, pageSize) {
        var pageData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pageData;
        $scope.totalServerItem = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function() {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                topProblemApiService.getOptions().success(function (largeLoad) {
                    data = largeLoad.filter(function(item) {
                         return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data, page, pageSize);
                });
            } else {
                topProblemApiService.getOptions().success(function (largeLoad) {
                    $scope.setPagingData(largeLoad, page, pageSize);
                });
            }
        }, 100);
    };
    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
    
    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    
    $scope.gridOptions = {
        data: 'myData',
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };
});