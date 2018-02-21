
templatingApp.controller('UserController', ['$scope', '$http', function ($scope, $http) {
    $scope.title = "All User";
    $scope.ListUser = null;
    $scope.userModel = {};
    $scope.userModel.Id = 0;
    getallData();

    //******=========Get All User=========******
    function getallData() {
        $http({
            method: 'GET',
            url: '/api/user/getAll/'
        }).then(function (response) {
            $scope.ListUser = response.data;
        }, function (error) {
            console.log(error);
        });
    };

    //******=========Get Single User=========******
    $scope.getUser = function (user) {
        $http({
            method: 'GET',
            url: '/api/user/getUser/' + parseInt(user.Id)
        }).then(function (response) {
            $scope.userModel = response.data[0];
        }, function (error) {
            console.log(error);
        });
    };

    //******=========Save User=========******
    $scope.saveUser = function () {
        $http({
            method: 'POST',
            url: '/api/user/setUser/',
            data: $scope.userModel
        }).then(function (response) {
            showNotif("Data Saved")
            $scope.reset();
            getallData();
        }, function (error) {
            console.log(error);
        });
    };

    //******=========Update User=========******
    $scope.updateUser = function () {
        $http({
            method: 'PUT',
            url: '/api/user/putUser/',
            data: $scope.userModel
        }).then(function (response) {
            showNotif("Data Updated")
            $scope.reset();
            getallData();
        }, function (error) {
            console.log(error);
        });
    };

    //******=========Delete User=========******
    $scope.deleteUser = function (user) {
        var IsConf = confirm('You are about to delete ' + user.Name + '. Are you sure?');
        if (IsConf) {
            $http({
                method: 'DELETE',
                url: '/api/user/deleteUser/' + parseInt(user.Id)
            }).then(function (response) {
                showNotif("Data Deleted")
                $scope.reset();
                getallData();
            }, function (error) {
                console.log(error);
            });
        }
    };

    //******=========Clear Form=========******
    $scope.reset = function () {
        var msg = "Form Cleared";
        $scope.userModel = {};
        $scope.userModel.Id = 0;
        showNotif(msg)
    };
}]);
