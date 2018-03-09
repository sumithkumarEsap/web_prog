angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http,$sce) {
        $scope.resulttrue =false;
        $scope.getVideos = function () {
            var searchKey = document.getElementById("txt_search").value;
            $scope.YoutubeUrl = new Array();
            if (searchKey != null && searchKey != "" ) {

                var handler = $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchKey+"&key=AIzaSyCkgmLrynuDPT1XavcBanNK-QQfC1vomZM");

                handler.success(function (data) {
                    if (data != null && data.items != null) {
                        $scope.resulttrue = $scope.resulttrue ? false : true;
                        for (var i = 0; i < 5; i++) {
                            var filter = data.items[i].id.videoId;

                            $scope.YoutubeUrl[i] = {
                                "title": data.items[i].snippet.title,
                                "vurl": $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+filter)
                            };
                        }

                    }
                    return true;
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                    return false;
                });
            }

        }
    });