angular.module('myApp')
    .controller('AjaxCtrl', function ($scope, AjaxService, $http) {
        //        ajaxService.success(function (data) {
        //            $scope.files = data;
        //        });
        var searchResult = [];

    
        $scope.searchFunction = function () {
            var request1 = AjaxService.searchUserId($scope.keyword);
            request1.then(function (success) {
                console.log(success.data);
            }, function (error) {
                console.log(error);
            });

            var request2 = AjaxService.searchType($scope.keyword);
            request2.then(function (success) {
                console.log(success.data);
            }, function (error) {
                console.log(error);
            });

            var query = {
                title: $scope.keyword,
                desc: $scope.keyword
            };
            var request3 = AjaxService.searchTitle(query);
            request3.then(function (success) {
                console.log(success.data);
            }, function (error) {
                console.log(error);
            });

            var request4 = AjaxService.searchDesc(query);
            request4.then(function (success) {
                console.log(success.data);
            }, function (error) {
                console.log(error);
            });

        }

        $scope.logInFunction = function () {
            var data = {
                username: $scope.username,
                password: $scope.password
            };
            var request = AjaxService.logIn(data);
            request.then(function (success) {
                console.log(success.data);
            }, function (error) {
                console.log(error);
            });
        };

        $scope.likeFunction = function () {
            var request = AjaxService.likeAFile($scope.fileID, $scope.userID);
            request.then(function (success) {
                console.log(success.data);
            }, function (error) {
                console.log(error);
            });
        };
    
    $scope.unlikeFunction = function () {
            var request = AjaxService.unlikeAFile($scope.fileID, $scope.userID);
            request.then(function (success) {
                console.log(success.data);
            }, function (error) {
                console.log(error);
            });
        };
    
    $scope.getAllCommentsFunction = function () {
        var request = AjaxService.getAllComments();
        request.then(function (success) {
                console.log(success.data);
                $scope.comments = success.data;
            }, function (error) {
                console.log(error);
            });
    };
    
    $scope.getAllCommentsAFileFunction = function () {
        var request = AjaxService.getAllCommentsAFile($scope.fileID);
        request.then(function (success) {
                console.log(success.data);
                $scope.comments = success.data;
            }, function (error) {
                console.log(error);
            });
    };

        //        $scope.setMediaFile = function (element) {
        //            console.log(element.files[0]);
        //            $scope.type = element.files[0].type.substring(0,5);
        //            $scope.mimeType = element.files[0].type;
        //            console.log($scope.type);
        //        };
        //        
        //        $scope.sendImage = function () {
        //            var fd = new FormData(document.getElementById('uploadForm'));
        //            fd.append('user', 6);
        //        fd.append('type', $scope.type);
        //        fd.append('mime-type', $scope.mimeType);
        //            var request = $http.post('http://util.mw.metropolia.fi/ImageRekt/api/v2/upload', fd, {
        //                    transformRequest: angular.identity,
        //                    headers: {
        //                        'Content-Type': undefined
        //                    }
        //                }).success(function (data) {
        //                    console.log(fd);
        //                    console.log(data);
        //                })
        //                .error(function (data) {
        //                    console.log(data);
        //                });
        //        };
    });