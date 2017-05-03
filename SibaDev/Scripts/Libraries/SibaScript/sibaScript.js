

     //Function to save or upate records ** To be called at the dialog form
      function SaveUpdate()
      {
                      
          //Cover data
          var CoverData = [{
              CVR_CODE: $('#txtCoverCode').val(),
              CVR_NAME: $('#txtCovName').val(),
              CVR_DESCRIPTION: $('#txtCovDesc').val(),
              CVR_TYPE: $('#dwnCovType').val(),
              CVR_BASIC_COVER: ($('#chkbasicCov').is(':checked')) ? 'Y' : 'N',
              CVR_RATED: ($('#chkRatedCov').is(':checked')) ? 'Y' : 'N',
              CVR_RATE_CHANGE: ($('#chkRateChange').is(':checked')) ? 'Y' : 'N',
              CVR_RI_APPLICABLE: ($('#chkRIApp').is(':checked')) ? 'Y' : 'N',
              CVR_SI_CHANGE: ($('#chkSIChange').is(':checked')) ? 'Y' : 'N',
              CVR_USER_PREMIUM:  ($("#chkPremEnter").is(':checked')) ? 'Y' : 'N',
              CVR_PREM_REFUND: ($("#chkPremRefund").is(':checked')) ? 'Y' : 'N',

              CVR_LEVELS: $("input[name=radGroup]:checked").val(),
              CVR_CRTE_BY: "DEMO",
              //CVR_CRTE_DATE: "",
              CVR_MOD_BY :   "DEMO",   
              //CVR_MOD_DATE : "",
              CVR_STATUS: ($("#chkStatus").is(':checked')) ? 'Y' : 'N'
          }];

               
          var Type = "";
          var Url = "";
          if ($('#txtStatus').val() == "") {
              Type = 'POST';
              Url = 'http://localhost:46831/api/CreateCovers';

          }
          else if ($('#txtStatus').val() == 1) {

                   
              Type = 'POST';
              Url = 'http://localhost:46831/api/updateCovers';
          }
          else {
               
              alert('Record status not set properly');
          }

          //
          $.ajax({

              type: Type,
              url: Url,

              //Data to send

              data: JSON.stringify({ cov: CoverData}),

              contentType: 'application/json; charset=utf-8',
              dataType: 'json',

              //dataprocess: true,
              success: function (data) {
                  alert(data);

                  $('#txtStatus').val(data);

                  $('#txtStatus').val(1);

              },
              'error': function (error) {
                  alert(JSON.stringify(error));
                  $('#txtStatus').val("");
              }

          });
      };
//--- -----------------------------------Search Grid Covers ------------ -->

// 
$(document).ready(function () {

    $("#btnSearchCovers").click(function (e) {
             
               
        //jQuery("#grdCov").jqGrid("clearGridData");

        var Url = "";
              

        if ($("#txtSearch").val() == "") {

            Url = 'http://localhost:46831/api/GetCovers';

                  
        }

        else if ($("#txtSearch").val() != "") {


            Url = 'http://localhost:46831/api/GetCovers/' + $("#txtSearch").val();

        };

              
        $("#grdCov").jqGrid("setGridParam", {

            url: Url,

            //url: '/GetProcutTest/getProducts',
            datatype: "json",
            contentType: "application/json; charset-utf-8",
                  

            type: 'GET',
               
        }).trigger("reloadGrid");

    });
});


// ==================================Cover Grid ===============================
       
$(document).ready(function () {

    $("#grdCov").jqGrid({
        data: 'local',
        colNames: ['Code', 'Name', 'Description', 'Cover Type', 'Basic Cover',
             'Rated', 'Rate Change', 'SI Change?', 'Premium enterable', 'Premium Refund',
             'Applicable Level', 'RI Applicable', 'Created by', 'Create Date', 'Modified By',
             'Modified Date', 'Status'],

        colModel: [
            { name: 'CVR_CODE', index: 'CVR_CODE', width: 150, sorttype: "int" },
             { name: 'CVR_NAME', index: 'CVR_NAME', width: 150 },
            { name: 'CVR_DESCRIPTION', index: 'CVR_DESCRIPTION', width: 150 },
            { name: 'CVR_TYPE', index: 'CVR_TYPE', width: 150 },
            { name: 'CVR_BASIC_COVER', index: 'CVR_BASIC_COVER', width: 150 },
            { name: 'CVR_RATED', index: 'CVR_RATED', width: 150 },
            { name: 'CVR_RATE_CHANGE', index: 'CVR_RATE_CHANGE', width: 150 },
            { name: 'CVR_SI_CHANGE', index: 'CVR_SI_CHANGE', width: 150 },
            { name: 'CVR_USER_PREMIUM', index: 'CVR_USER_PREMIUM', width: 150 },
            { name: 'CVR_PREM_REFUND', index: 'CVR_PREM_REFUND', width: 150 },
            { name: 'CVR_LEVELS', index: 'CVR_LEVELS', width: 150 },
            { name: 'CVR_RI_APPLICABLE', index: 'CVR_RI_APPLICABLE', width: 150 },
            { name: 'CVR_CRTE_BY', index: 'CVR_CRTE_BY', width: 150 },
            { name: 'CVR_CRTE_DATE', index: 'CVR_CRTE_DATE', width: 150 },
            { name: 'CVR_MOD_BY', index: 'CVR_MOD_BY', width: 150 },
            { name: 'CVR_MOD_DATE', index: 'CVR_MOD_DATE', width: 150 },
            { name: 'CVR_STATUS', index: 'CVR_STATUS', width: 150 }
                 
        ],
        //Retrive Code and description and return on row click..
        onSelectRow: function (rowid) {
            var grid = $('#grdCov');
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var Code = grid.jqGrid('getCell', sel_id, 'PDT_CODE');
            var Desc = DescCellData = grid.jqGrid('getCell', sel_id, 'PDT_DESC');
            // $("#txtCustID").val(Code);
            // $("#txtCustDesc").val(Desc);
        },

        rowNum: 30,
        rowList: [30, 50, 100],
        pager: '#grdCovPager',
        sortname: 'Code',
        viewrecords: true,
        sortorder: "asc",
        caption: "Cover list",
        //loadtext: 'Loading, please wait',
        //new added
        width: this.parentElement,
        shrinkToFit: false,
        autowidth: false,
        multiselect: false
    });
    jQuery("#grdCov").jqGrid('navGrid', '#grdCovPager',
        { edit: false, add: false, del: false });
});

//Taps Layout function call using Jquery
$(function () {
    $("#tabs").tabs({
        beforeLoad: function (event, ui) {
            ui.jqXHR.fail(function () {
                ui.panel.html(
                  "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                  "If this wouldn't be a demo.");
            });
        }
    });
});

$(function () {
    //  $("#tabs").resizable();
    $("#tabs").height(1700);
    //$("#tabs").draggable();

});


//// Dialog box==========================================================================



$(function () {
    var dialog, form,
    Savedialog = $("#dlgCode-form").dialog({
        autoOpen: false,
        height: 300,
        width: 500,
        modal: true,

        buttons: {
            "YES": function () {

                SaveUpdate();

                $(this).dialog("close");


            },


            "NO": function () {

                $(this).dialog("close");

            },
        }

    });

    //open the dialog form TO SAVE
    $("#btnSaveCovers").button().on("click", function () {
        Savedialog.dialog("open");

    });

});

