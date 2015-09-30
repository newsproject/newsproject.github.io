app.factory('news', ['$http', function($http) {
        return  $http.get("https://webhose.io/search?token=c23fe419-8713-48cb-a614-37d7c3fb9549&format=json&q=performance_score%3A%3E8&language=english&ts=1443485217547&site_type=news")
                            .success(function(data){
                            console.log("function working");
                            return data;
        })
                            .error(function(data){
                        cosnole.log(data);
        })

                               

}]
           
           
           
)