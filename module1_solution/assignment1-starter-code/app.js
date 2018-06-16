(function(){
    console.log("App created.");
    
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', lunchCheckController);
    
    console.log("Controller created.");
    
    lunchCheckController.$inject = ['$scope'];
    console.log("Scope injected.");

    function lunchCheckController ($scope){
        $scope.dishes = "";
        $scope.message = "";

        console.log("Controller Initialized.");

        $scope.checkContent = function (){
            console.log("Clicked");
            if (!($scope.dishes.length === 0 || typeof $scope.dishes.length === 'undefined')){
                var contentsArray = $scope.dishes.split(",");
                
                console.log(contentsArray);
                
                if((contentsArray.length) <= 3){
                    $scope.message = "Enjoy!";
                }

                else{
                    $scope.message = "Too much!";
                }
            }
            else{
                $scope.message = "Please enter data first";
            }
        };
    };
})();