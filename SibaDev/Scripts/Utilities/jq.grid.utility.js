(function($, u){
    u.add({
        /**
         * function to generate a default grid
         * @param string grid_id the id of the grid
         * @param string pager_id
         * @param string caption for the grid
         * @param Array col_names the array of columns for the grid
         * @param Array col_mdls the array of models for the column names specified
         * @param mixed on_select the on select event handler for the grid
         * @return jqgrid object
         */
        default_grid: function (gridId, pagerId, caption, colNames, colMdls, onSelect,onDblclick) {
            //alert("creating  grid")
            //console.log(colMdls);
            var grid = $(gridId).jqGrid({
                datatype: "local",
                height: 455,
                colNames: colNames,
                colModel: colMdls,
                onSelectRow: onSelect,
                ondblClickRow: onDblclick || function () { },
                rowNum: 50,
                rowList: [50, 75, 100],
                pager: pagerId,
                sortname: "id",
                viewrecords: true,
                sortorder: "asc",
                loadonce: true,
                ignoreCase: true,
                caption: caption,
                loadtext: "Loading, please wait",
                //new added
                width: this.parentElement,
                shrinkToFit: false,
                autowidth: false,
                multiselect: false
            });

            //jQuery(gridId).jqGrid('navGrid', pagerId,
            // { search: true, edit: false, add: false, del: false });

            jQuery(gridId).jqGrid("filterToolbar",
               { searchOnEnter: false, stringResult: true, defaultSearch: "cn" });

            jQuery(gridId).jqGrid("bindKeys");

            jQuery(gridId).navButtonAdd(pagerId, {

            });

            $(".ui-jqgrid").attr("style", "");
            //$(".ui-jqgrid-bdiv").attr("style", "height: 400px;");
            $(pagerId).attr("style", "");
            $(".ui-jqgrid").find(".ui-jqgrid-view, .ui-state-default.ui-jqgrid-hdiv").each(function () {
                $(this).attr("style", "");
            });

            $(".ui-jqgrid-bdiv").attr("style", "height: 500px;");

            return grid;
        },
        clear_grid_data: function (grid) {
            grid.jqGrid("clearGridData");
        },
        get_grid_data: function (grid) { return grid.jqGrid("getRowData") },
        grid_empty: function (grid) {
            return this.get_grid_data(grid).length <= 0;
        },
        grid_populate: function(grid, id, rows) {
            for (var i in rows) {
                if (rows[i])grid.addRowData(rows[i][id], rows[i]);
            }
                
        },
        update_grid_status: function(grid, column, childColumn,childStatusColumn) {
            var rowIds = grid.jqGrid("getDataIDs");
            var covRecStatus;
            for (var i = 0; i < rowIds.length; i++) {
                covRecStatus = grid.jqGrid("getCell", rowIds[i], column);

                //Delete cover row if it is marked for deletion
                if (covRecStatus === "D") {
                    grid.jqGrid("delRowData", rowIds[i]);
                }
                //Update cover row status to Active (A) if it is newly added
                if (covRecStatus === "U") {
                    grid.jqGrid("setCell", rowIds[i], column, "A");
                }

                //update the status columns of child items in the specified child column
                if (childColumn) {
                    var children = JSON.parse(grid.jqGrid("getCell", rowIds[i], childColumn));
                    for (var j in children) {
                        if (children[j][childStatusColumn] === "U") {
                            children[j][childStatusColumn] = "A";
                        }

                        if (children[j][childStatusColumn] === "D") {
                            delete children[j];
                        }
                        
                    }
                    grid.jqGrid("setCell", rowIds[i], childColumn, JSON.stringify(children));
                }
                
            }
        },
        forEach: function(obj, iterator, context) {
            var key, length;
            if (obj) {
                if (this.isFunction(obj)) {
                    for (key in obj) {
                        if (key !== "prototype" && key !== "length" && key !== "name" && obj.hasOwnProperty(key)) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                } else if (Array.isArray(obj)) {
                    var isPrimitive = typeof obj !== "object";
                    for (key = 0, length = obj.length; key < length; key++) {
                        if (isPrimitive || key in obj) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                } else if (obj.forEach && obj.forEach !== forEach) {
                    obj.forEach(iterator, context, obj);
                }
                //else if (isBlankObject(obj)) {
                //    // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
                //    for (key in obj) {
                //        iterator.call(context, obj[key], key, obj);
                //    }
                //}
                else if (typeof obj.hasOwnProperty === "function") {
                    // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
                    for (key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                } else {
                    // Slow path for objects which do not have a method `hasOwnProperty`
                    for (key in obj) {
                        if (hasOwnProperty.call(obj, key)) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                }
            }
            return obj;
        },
        isFunction: function (value) { return typeof value === "function"; },
        isArrayBuffer: function(obj) {
          return toString.call(obj) === "[object ArrayBuffer]";
        },
        isPrimitive: function(value) {
            switch (typeof value) {
                case "number": /* falls through */
                case "boolean": /* falls through */
                case "string":
                    return true;
                default:
                    return false;
            }
        }
    });

})(window.jQuery, window.utility)