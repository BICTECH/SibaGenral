jQuery(document).ready(function () {
    var lastsel2

    jQuery("#datagrid").jqGrid({
        datatype: "local",
        height: 250,
        sortable: true,

        search: {
            caption: "Search...",
            Find: "Find",
            Reset: "Reset",
            data: ['equal', 'not equal', 'less', 'less or equal', 'greater', 'greater or equal', 'begins with', 'does not begin with', 'is in', 'is not in', 'ends with', 'does not end with', 'contains', 'does not contain'],
            groupOps: [{ op: "AND", text: "all" }, { op: "OR", text: "any" }],
            matchText: " match",
            rulesText: " rules"
        },

        colNames: ['ID', 'Name', 'Address', 'Age', 'Date'],
        colModel: [
        { name: 'id', index: 'id', width: 260, sorttype: "int", editable: true },
        { name: 'name', index: 'name', width: 150, editable: true },
        { name: 'adress', index: 'address', width: 150, editable: true },
        { name: 'age', index: 'age', width: 150, editable: true },
          { name: 'date', index: 'date', width: 150, editable: true },
        ],

        onSelectRow22: function (id) {
            $('#datagrid').jqGrid("editCell", 0, 0, false);
            var rowData = jQuery(this).getRowData(id);
            var temp = rowData['name'];//replace name with your column
            $('#txtName').val() = temp;
            //alert(temp);
        },
        caption: "Employee Details"


    })




})


//call add function to add records to grid
$(document).ready(function () {

    $("#Add").on('click', function () {
        if ($('#txtName').val() == "") {
            alert(" Name field cannot be empty");

        }
        else {
            var personData = [
            { id: $('#txtID').val(), name: $('#txtName').val(), adress: $('#txtAddress').val(), age: $('#txtAge').val() },

            ];
            for (var i = 0; i < personData.length; i++)
                jQuery("#datagrid").addRowData(personData[i].id, personData[i]);


        }

    });

});
$(function () {
    var dialog, form,

      name = $("#name"),
      email = $("#email"),
      password = $("#password"),
      allFields = $([]).add(name).add(email).add(password),
      tips = $(".validateTips");

    function updateTips(t) {
        tips
          .text(t)
          .addClass("ui-state-highlight");
        setTimeout(function () {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    }


    function addUser() {

        if ($('#txtName1').val() == "") {
            alert(" Name field cannot be empty");

        }
        else {
            var personData = [
            { id: $('#txtID1').val(), name: $('#txtName1').val(), adress: $('#txtAddress1').val(), age: $('#txtAge1').val(), date: $('#dtDob2').val() },

            ];
            for (var i = 0; i < personData.length; i++)
                jQuery("#datagrid").addRowData(personData[i].id, personData[i]);


        }


    }

    // initialising the dialog form
    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 600,
        width: 700,
        modal: true,
        buttons: {
            "Create an account": addUser,
            Cancel: function () {
                dialog.dialog("close");
            }
        },
        close: function () {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    });

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
        addUser();
    });

    $("#btnSelCust").button().on("click", function () {
        dialog.dialog("open");
    });
});




//Date picker -->
$(function () {
    $("#dtPolstartDate").datepicker({
        showOn: "button",
        buttonImage: "Image/datePicker.gif",
        buttonImageOnly: true,
        buttonText: "Select"
    });
});

//Date picker -->
//Start date
$(function () {
    $("#dtPolEndDate").datepicker({
        showOn: "button",
        buttonImage: "Image/datePicker.gif",
        buttonImageOnly: true,
        buttonText: "Select"
    });
});
//end date
$(function () {
    $("#dtDob2").datepicker({
        showOn: "button",
        buttonImage: "Image/datePicker.gif",
        buttonImageOnly: true,
        buttonText: "Select"

    });

});
//Numeric Value input
$(document).ready(function () {
    //called when key is pressed in textbox
    $("#txtAge").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#errmsg").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });
});


//Modal dialog confirm -->
$("#btnDelete").button().on("click", function () {
    $("#dialog-confirm").dialog({
        resizable: false,
        height: 140,
        modal: true,
        buttons: {
            "Delete all items": function () {
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });
});
