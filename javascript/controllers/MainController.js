app.controller('MainController', ['$scope', 'news', function($scope, news) {
    $scope.dataLoaded = false;   
    news.success(function(data) {
        console.log("controller is working");
            $scope.news=data;
        $scope.dataLoaded = true;
              $(".inline").colorbox({inline:true, width:"50%"});

        })
    news.error(function(data) {
           console.log("error");
        
    })
}])