angular.module("toDoList", [])

    .controller("toDoListCtrl", ['$scope',
        function($scope) {

            $scope.taskList = [
                {   done: true,
                    task: 'one'
                },
                {
                    done: false,
                    task: 'two'
                },
            ];

            $scope.addTask = function(task) {

                $scope.taskList.push({
                    done: false,
                    task: task
                });
            };

        }
    ]);