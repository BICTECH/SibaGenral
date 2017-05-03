(function ($, s, u, $scope) {
    $(function () {

var spry_code = new Spry.Widget.ValidationTextField("spry_code", 'none', {validateOn: ["blur", "change"]});
var spry_name = new Spry.Widget.ValidationTextField("spry_name", 'none', {validateOn: ["blur", "change"]});
var spry_desc = new Spry.Widget.ValidationTextField("spry_desc", 'none', {validateOn: ["blur", "change"]});
var spry_email = new Spry.Widget.ValidationTextField("spry_email", 'email', {validateOn: ["blur", "change"]});
var spry_phone = new Spry.Widget.ValidationTextField("spry_phone", 'integer', { useCharacterMasking: true, validateOn: ["blur", "change"] });
var spry_telno = new Spry.Widget.ValidationTextField("spry_telno", 'integer', { useCharacterMasking: true, validateOn: ["blur", "change"] });
var spry_fromdate = new Spry.Widget.ValidationTextField("spry_fromdate", 'none', { validateOn: ["blur", "change"] });
var spry_todate = new Spry.Widget.ValidationTextField("spry_todate", 'none', { validateOn: ["blur", "change"] });
var spry_year = new Spry.Widget.ValidationTextField("spry_year", 'none', { validateOn: ["blur", "change"] });

        /*--------------------------------
               * Currency Form validation
               *------------------------------*/
var spry_currcountry = new Spry.Widget.ValidationTextField("spry_currcountry", 'none', {validateOn: ["blur", "change"]});
var spry_decsymbol = new Spry.Widget.ValidationTextField("spry_decsymbol", 'none', {validateOn: ["blur", "change"]});
var spry_unit = new Spry.Widget.ValidationTextField("spry_unit", 'none', {validateOn: ["blur", "change"]});
var CUR_SYMBOL = new Spry.Widget.ValidationTextField("CUR_SYMBOL", 'none', {validateOn: ["blur", "change"]});

        /*--------------------------------
                  * Discount & Loading Form validation
                  *------------------------------*/

var spry_amount = new Spry.Widget.ValidationTextField("spry_amount", 'integer', { validateOn: ["blur", "change"] });
var spry_desc = new Spry.Widget.ValidationTextField("spry_desc", 'none', { validateOn: ["blur", "change"] });
var spry_minamount = new Spry.Widget.ValidationTextField("spry_minamount", 'integer', { validateOn: ["blur", "change"] });
var spry_maxamount = new Spry.Widget.ValidationTextField("spry_maxamount", 'integer', { validateOn: ["blur", "change"] });
var spry_perc = new Spry.Widget.ValidationTextField("spry_perc", 'integer', { validateOn: ["blur", "change"] });
var spry_minperc = new Spry.Widget.ValidationTextField("spry_minperc", 'integer', { validateOn: ["blur", "change"] });
var spry_maxperc = new Spry.Widget.ValidationTextField("spry_maxperc", 'integer', { validateOn: ["blur", "change"] });

 /*--------------------------------
                  * Office Form validation
                  *------------------------------*/

var spry_fax = new Spry.Widget.ValidationTextField("spry_fax", 'integer', { validateOn: ["blur", "change"] });
var spry_location = new Spry.Widget.ValidationTextField("spry_location", 'none', { validateOn: ["blur", "change"] });
var spry_manager = new Spry.Widget.ValidationTextField("spry_manager", 'none', { validateOn: ["blur", "change"] });


        /*--------------------------------
                         * Exchange rate Form validation
                         *------------------------------*/
var spry_basecurr = new Spry.Widget.ValidationTextField("spry_basecurr", 'none', { validateOn: ["blur", "change"] });
var spry_baserate = new Spry.Widget.ValidationTextField("spry_baserate", 'none', { validateOn: ["blur", "change"] });
var spry_fxcurrency = new Spry.Widget.ValidationTextField("spry_fxcurrency", 'none', { validateOn: ["blur", "change"] });

var spry_fxrate = new Spry.Widget.ValidationTextField("spry_fxrate", 'none', { validateOn: ["blur", "change"] });


        /*--------------------------------
                     * Exchange rate Form validation
                     *------------------------------*/
var spry_chasisno = new Spry.Widget.ValidationTextField("spry_chasisno", 'integer', { validateOn: ["blur", "change"] });
var spry_cubicno = new Spry.Widget.ValidationTextField("spry_cubicno", 'integer', { validateOn: ["blur", "change"] });
var spry_load = new Spry.Widget.ValidationTextField("spry_load", 'none', { validateOn: ["blur", "change"] });

 /*--------------------------------
                    * Intermediary Form validation 
                    *------------------------------*/
var spry_perc = new Spry.Widget.ValidationTextField("spry_perc", 'none', { validateOn: ["blur", "change"] });
var spry_cperson = new Spry.Widget.ValidationTextField("spry_cperson", 'none', { validateOn: ["blur", "change"] });
var spry_bankname = new Spry.Widget.ValidationTextField("spry_bankname", 'none', { validateOn: ["blur", "change"] });
var spry_bankbranch = new Spry.Widget.ValidationTextField("spry_bankbranch", 'none', { validateOn: ["blur", "change"] });
var spry_bankaccno = new Spry.Widget.ValidationTextField("spry_bankaccno", 'integer', { validateOn: ["blur", "change"] });
var spry_idno = new Spry.Widget.ValidationTextField("spry_idno", 'none', { validateOn: ["blur", "change"] });
var spry_fname = new Spry.Widget.ValidationTextField("spry_fname", 'none', { validateOn: ["blur", "change"] });
var spry_lname = new Spry.Widget.ValidationTextField("spry_lname", 'none', { validateOn: ["blur", "change"] });

         /*--------------------------------
            * LOV validation
            *------------------------------*/
var spry_lovcode = new Spry.Widget.ValidationTextField("spry_lovcode", 'none', { validateOn: ["blur", "change"] });
var spry_lovcode = new Spry.Widget.ValidationTextField("spry_lovcode1", 'none', { validateOn: ["blur", "change"] });
var spry_lovname = new Spry.Widget.ValidationTextField("spry_lovname", 'none', { validateOn: ["blur", "change"] });
var spry_lovname = new Spry.Widget.ValidationTextField("spry_lovname1", 'none', { validateOn: ["blur", "change"] });


        /*--------------------------------
* Customer Form validation
*------------------------------*/
var spry_custype = new Spry.Widget.ValidationTextField("spry_custype", 'none', { validateOn: ["blur", "change"] });
var spry_custid = new Spry.Widget.ValidationTextField("spry_custid", 'none', { validateOn: ["blur", "change"] });
var spry_fname = new Spry.Widget.ValidationTextField("spry_fname", 'none', { validateOn: ["blur", "change"] });
var spry_lname = new Spry.Widget.ValidationTextField("spry_lname", 'none', { validateOn: ["blur", "change"] });
var spry_othername = new Spry.Widget.ValidationTextField("spry_othername", 'none', { validateOn: ["blur", "change"] });
var spry_officialname = new Spry.Widget.ValidationTextField("spry_officialname", 'none', { validateOn: ["blur", "change"] });
var spry_dob = new Spry.Widget.ValidationTextField("spry_dob", 'date', { validateOn: ["blur", "change"] });
var spry_dob = new Spry.Widget.ValidationTextField("spry_dob1", 'date', { validateOn: ["blur", "change"] });
var spry_age = new Spry.Widget.ValidationTextField("spry_age", 'integer', { validateOn: ["blur", "change"] });
var spry_occup = new Spry.Widget.ValidationTextField("spry_occup", 'none', { validateOn: ["blur", "change"] });
var spry_nationality = new Spry.Widget.ValidationTextField("spry_nationality", 'none', { validateOn: ["blur", "change"] });


        /*--------------------------------
* Policy Header Form validation
*------------------------------*/
var spry_polhcomp = new Spry.Widget.ValidationTextField("spry_polhcomp", 'none', { validateOn: ["blur", "change"] });
var spry_polhchannel = new Spry.Widget.ValidationTextField("spry_polhchannel", 'none', { validateOn: ["blur", "change"] });
var spry_polhoff = new Spry.Widget.ValidationTextField("spry_polhoff", 'none', { validateOn: ["blur", "change"] });
var spry_polhclass = new Spry.Widget.ValidationTextField("spry_polhclass", 'none', { validateOn: ["blur", "change"] });
var spry_polhsubclass = new Spry.Widget.ValidationTextField("spry_polhsubclass", 'none', { validateOn: ["blur", "change"] });
var spry_polhbuz = new Spry.Widget.ValidationTextField("spry_polhbuz", 'none', { validateOn: ["blur", "change"] });
var spry_polhins = new Spry.Widget.ValidationTextField("spry_polhins", 'none', { validateOn: ["blur", "change"] });
var spry_polhbroker = new Spry.Widget.ValidationTextField("spry_polhbroker", 'none', { validateOn: ["blur", "change"] });
var spry_polhcustcode = new Spry.Widget.ValidationTextField("spry_polhcustcode", 'none', { validateOn: ["blur", "change"] });


    });
})(window.$, window.service, window.utility, {});