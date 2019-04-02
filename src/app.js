angular.module('app', [])
    .controller('app', function ($scope, $http) {

        $scope.clients = {};
        $scope.submitForm = function () {
            $http({
                    method: 'POST',
                    url: 'http://127.0.0.1:8080/demo/add',
                    data: $scope.clients,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin*': '*'
                    }
                })
                .success(function (data) {
                    if (data.errors) {
                        console.log(error)
                    } else {
                        this.clientForm.reset();
                        $scope.tableList.reload();
                    }
                });
        };

        $http.get('http://127.0.0.1:8080/demo/all').
        then(function (response) {
            console.log(response.data)
            $scope.client = response.data;
        });

    });