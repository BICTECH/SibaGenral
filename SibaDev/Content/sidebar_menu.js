$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $('#menu div').hide();
});

function initMenu() {
    $('#menu div').hide();
    $('#menu div').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu div a').click(
      function () {
          var checkElement = $(this).next();
          if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
              return false;
          }
          if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
              $('#menu div:visible').slideUp('normal');
              checkElement.slideDown('normal');
              return false;
          }
      }
      );
}
$(document).ready(function () { initMenu(); });