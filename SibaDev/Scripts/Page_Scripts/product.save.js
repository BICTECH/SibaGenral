function SaveUpdate(callback) {
    //Product data
    var productData = [{
        PDT_CODE: $('#txtProdCode').val(),
        PDT_SYS_ID: $('#txtSySId').val(),
        PDT_NAME: $('#txtProdName').val(),
        PDT_DESC: $('#txtProdDesc').val(),
        PDT_CLASS: $('#txtClassCode').val(),
        PDT_SUB_CLASS: $('#txtSubClassCode').val(),
        PDT_RI_LEVEL: $("input[name=radRIGroup]:checked").val(),
        PDT_TERM: $('#dwnProdTerm').val(),
        // PDT_CRTE_BY: "DEMO",
        //PDT_CRTE_DATE: ($('#chkSIChange').is(':checked')) ? 'Y' : 'N',
        // PDT_MOD_BY: "DEMO",
        // PPDT_MOD_DATE: ($("#chkPremRefund").is(':checked')) ? 'Y' : 'N',
        PDT_STATUS: 'A'
    }];

    // alert(JSON.stringify(productData, prodCoverData, prodClauseData));
    //Product Cover data
    var prodCoverData = jQuery("#gridAppCovers").jqGrid('getRowData');
    var prodClauseData = jQuery("#gridAppClause").jqGrid('getRowData');
    if ($('#txtPolicyState').val() == "") {

        Url = '/api/CreateProductSetUp/PostProductSetUp';

        alert("Saved Successfully");
    }
    else if ($('#txtPolicyState').val() == "A") {

        //udate if status is A (Saved and active)
        Url = '/api/UpdateProduct';

        alert("Updated Successfully");
    }

    $.ajax({

        type: 'POST',
        url: Url,

        //Data to send

        data: JSON.stringify({ prod: productData, prodCov: prodCoverData, prodClau: prodClauseData }),

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',

        //dataprocess: true,
        success: function (data) {

            callback(data);
            return (data);

        },
        'error': function (error) {

            callback(error);

            return (error);
            //  alert(JSON.stringify(error));
        }
    });
};

////Save Dialog box==========================================================================

$(function () {
    var dialog, form,
    Savedialog = $("#dlgCode-form").dialog({
        autoOpen: false,
        height: 300,
        width: 500,
        modal: true,

        buttons: {
            "YES": function () {

                SaveUpdate(getDataAfterSave);

                function getDataAfterSave(data) {
                    var results = data;

                    if (results == "A") {

                        $('#txtPolicyState').val("A");

                        var covergrid = $('#gridAppCovers');

                        var covRowIds = covergrid.jqGrid('getDataIDs');

                        // iterate through the rows in Cover Grid and update Status
                        for (var i = 0, len = covRowIds.length; i < len; i++) {
                            var covCurrRow = covRowIds[i];

                            covergrid.jqGrid('setCell', covCurrRow, 'PCV_STATUS', 'A');

                        }
                        //
                        var clausegrid = $('#gridAppClause');

                        var clauseRowIds = clausegrid.jqGrid('getDataIDs');

                        // iterate through the rows in veh risk Grid and update Status
                        for (var i = 0, len = clauseRowIds.length; i < len; i++) {

                            var clauseCurrRow = clauseRowIds[i];

                            clausegrid.jqGrid('setCell', clauseCurrRow, 'PCC_STATUS', 'A');
                        }

                        alert("Saved successfully");

                    }

                        //Update responds from controller
                    else if (results == "S") {
                        //returns S on updated

                        $('#txtPolicyState').val("A");

                        var covergrid = $('#gridAppCovers');

                        var covRowIds = covergrid.jqGrid('getDataIDs');

                        // iterate through the rows in Cover Grid and update Status
                        for (var i = 0, len = covRowIds.length; i < len; i++) {
                            var covCurrRow = covRowIds[i];

                            var covRecStatus = covergrid.jqGrid('getCell', covCurrRow, 'PCV_STATUS');

                            //Delete cover row if it is marked for deletion
                            if (covRecStatus == "D") {
                                covergrid.jqGrid('delRowData', covCurrRow);
                            }
                            //Update cover row status to Active (A) if it is newlly added
                            if (covRecStatus == "U") {

                                covergrid.jqGrid('setCell', covCurrRow, 'PCV_STATUS', 'A');
                            }

                        }
                        //Upade Vehcil risk status
                        var clausegrid = $('#gridAppClause');

                        var clauseRowIds = clausegrid.jqGrid('getDataIDs');

                        // iterate through the rows and check if it exists each of them
                        for (var i = 0, len = clauseRowIds.length; i < len; i++) {
                            var clauseCurrRow = clauseRowIds[i];

                            var clauseRecStatus = clausegrid.jqGrid('getCell', clauseCurrRow, 'PCC_STATUS');

                            //Delete risk row if it is marked for deletion
                            if (clauseRecStatus == "D") {

                                clausegrid.jqGrid('delRowData', clauseCurrRow);
                            }

                            //Update risk row status to Active (A) if it is newlly added
                            if (clauseRecStatus == "U") {

                                clausegrid.jqGrid('setCell', clauseCurrRow, 'PCC_STATUS', 'A');
                            }
                        }
                        //alert user
                        alert("Updated successfully");

                    }
                    else if (results == "F") {
                        alert("No records were updated, Check and try again");
                    }
                    else {
                        alert("An error occured: " + JSON.stringify(results));
                    }

                };



                $(this).dialog("close");
            },
            "NO": function () {

                $(this).dialog("close");

            },
        }

    });

    //open the dialog form TO SAVE
    $("#btn_Save").button().on("click", function () {
        Savedialog.dialog("open");
    });
});