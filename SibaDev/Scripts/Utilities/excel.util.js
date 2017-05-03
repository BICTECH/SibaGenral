(function ($, u) {
    u.add({
        excel_export: function (grid, excludeColumns, fileName,showLabel, selectColumns) {
            //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
            showLabel = showLabel != null ? showLabel : true;
            
            var headers = grid.jqGrid("getGridParam", "colNames"),
                modelColumns = grid.jqGrid("getGridParam", "colModel"),
                jsonData = grid.jqGrid("getRowData");
            
            var copyHeaders = this.copy(headers);
            var arrData = typeof jsonData != "object" ? JSON.parse(jsonData) : jsonData;
           

            if (arrData.length > 0) {
                var csv = "";
                
                /*------------------------------
                 * removal of excluded headers
                 *----------------------------*/
                var i;
                for (i in headers) {
                    //alert(headers[i])
                    //
                    var indx = excludeColumns.indexOf(headers[i]);
                    if (indx >= 0) {
                        headers.splice(headers.indexOf(excludeColumns[indx]), 1);
                        //removal of excluded data for excluded headers
                        for (var x in arrData) {
                            delete arrData[x][modelColumns[i]["index"]];
                        }
                    }
                }

                /*---------------------------------------------------------------
                 * removal of headers that are not part of the selected columns
                 *-------------------------------------------------------------*/
                if (selectColumns) {
                    for (var y in copyHeaders) {
                        
                        var idx = selectColumns.indexOf(copyHeaders[y]);
                        if (idx < 0) {
                            headers.splice(headers.indexOf(copyHeaders[y]), 1);
                            //removal of excluded data for excluded headers
                            for (var z in arrData) {
                                delete arrData[z][modelColumns[y]["index"]];
                            }
                        }
                    }
                }


                var row = "";
                //This condition will generate the Label/Header
                if (showLabel) {
                    if (headers) {
                        row = headers.join(",");
                        row += " , ";
                    } else {
                        return false;
                    }
                    //append Label row with line break
                    csv += row + "\r\n";
                }

                

                //1st loop is to extract each row
                for (var d in arrData) {
                    row = "";
                    //2nd loop will extract each column and convert it in string comma-separated
                    for (var colName in arrData[d]) {
                        row += "\"" + arrData[d][colName] + "\",";
                    }

                    row.slice(0, row.length - 1);

                    //add a line break after each row
                    csv += row + "\r\n";
                }
                console.log(csv);
                if (csv === "") {
                    alert("Invalid data");
                    return false;
                }

                if (!fileName) {
                    //Generate a file name
                    fileName = "MyReport_";
                    //this will remove the blank-spaces from the title and replace it with an underscore
                    fileName += ReportTitle.replace(/ /g, "_");
                }
                
                if (navigator.appName === "Microsoft Internet Explorer") {
                    var oWin = window.open();
                    oWin.document.write("sep=,\r\n" + csv);
                    oWin.document.close();
                    oWin.document.execCommand("SaveAs", true, fileName + ".csv");
                    oWin.close();
                }
                else {

                    //Initialize file format you want csv or xls
                    var uri = "data:text/csv;charset=utf-8," + escape(csv);

                    // Now the little tricky part.
                    // you can use either>> window.open(uri);
                    // but this will not work in some browsers
                    // or you will not get the correct file extension    

                    //this trick will generate a temp <a /> tag
                    var link = document.createElement("a");
                    link.href = uri;

                    //set the visibility hidden so it will not effect on your web-layout
                    link.style = "visibility:hidden";
                    link.download = fileName + ".csv";

                    //this part will append the anchor tag and remove it after automatic click
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            } else {
                u.growl_info("Grid is Empty!!!");
            }
        },
        copy: function(object) {
            return $.extend(true, {}, object);
        }
    });
})(window.jQuery, window.utility);