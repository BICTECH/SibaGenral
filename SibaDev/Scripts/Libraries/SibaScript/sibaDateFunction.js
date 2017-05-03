

function sysdate() {
    var fullDate = new Date();
    var twoDigitMonth = fullDate.getMonth() + 1;
    if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
    var twoDigitDate = fullDate.getDate() + "";
    if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
    var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

    return currentDate;
}
var inputdate = ''

function userDate(inputdate) {

   //var reqDate =  $inputdate.datepicker.formatDate('dd M yy', new Date());
   
   var fullDate = new Date(inputdate);
    var twoDigitMonth = fullDate.getMonth() + 1;
    if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
    var twoDigitDate = fullDate.getDate();
    if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
    var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

    return currentDate;
}