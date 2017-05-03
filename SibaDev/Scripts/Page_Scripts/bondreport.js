(function ($, s, u, $scope) {
    $(function () {

        $("#btnQueryBondReport").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_bond(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        //$scope.search_fill(result[0]);
                        //var bonddata = result[0].INS_UDW_BONDS;
                        //jQuery("label[for='BOND_SYS_ID']").html(bonddata[0].BOND_SYS_ID);

                        u.fill_form(result, "#reportbond");
                       

                        //window.open('rptDebitNote', 'result')
                        //u.fill_form(result, "#reportbond");
                        //document.getElementById('frm_test_form').onsubmit();

                    } else {
                        u.growl_info("Policy No. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Policy No and try again!");
            }
        });


        //function openform() {
        //    mywindow = window.open(href = "rptDebitNote")
        //}
     
        //$("#btnwindopen").click(function () {
        //    openform();
        //});

    });

})(window.$, window.service, window.utility, {})