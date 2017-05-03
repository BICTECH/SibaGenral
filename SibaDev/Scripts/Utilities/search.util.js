(function($,u,s,$scope) {
    u.add({
        search: function(srchBtn,srchField,srchService) {
            
            //search grid
            $scope.searchGrid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
                ["Index", "Code", "Name"],
                [
                    { name: "index", id: true, index: "index", hidden: true },
                    { name: "CODE", index: "CODE" },
                    { name: "NAME", index: "NAME", wdith: 500 }
                ],
                function (index) {
                    $scope.selected_index = index;
                    $scope.search_fill($scope.result[index]);
                },
                function (index) {
                    $scope.search_fill($scope.result[index]);
                    u.clear_grid_data($scope.searchGrid);
                    $("#mySearchResultModal").modal("hide");
                });

            /*---------------------------
             * Product Search
             *-------------------------*/
            $(srchBtn).click(function () {

                if (!u.field_empty(srchField)) {
                    if (s[srchService]) {
                        s[srchService]($(srchField).val(), function (result) {
                            $scope.result = result;
                            /*-------------------------------
                             * clear grid before populating
                             *-----------------------------*/
                            $scope.searched = true;
                            if (result && result.length) {
                                if (result.length === 1) {
                                    $scope.search_fill(result[0]);
                                } else if (result.length > 1) {
                                    /*---------------------------------------------------------------------
                                     * display multiple results in the search modal for the user to choose
                                     *-------------------------------------------------------------------*/
                                    //populate search modal grid
                                    for (var i in result) {
                                        result[i].index = i;
                                        $scope.searchGrid.addRowData(result[i].index, result[i]);
                                    }
                                    //show modal
                                    $("#mySearchResultModal").modal();


                                    //fill form and grids with the selected product
                                    $("#search-ok").click(function () {
                                        $scope.search_fill(result[$scope.selected_index]);
                                        $("#mySearchResultModal").modal("hide");
                                        u.clear_grid_data($scope.searchGrid);
                                    });
                                } else if (result.length <= 0) {
                                    u.growl_info("The product does not Exist in the database.");
                                }
                            } else {
                                u.growl_info("The product does not Exist in the database.");
                            }

                        });
                    } else {
                        u.growl_error("The service name " + srchService + " does not exist");
                    }
                        
                    
                } else {
                    u.growl_info("Please enter the product code or product name to find a product");
                }
            });
        }
    });
})(window.jQuery,window.utility,window.service, {})