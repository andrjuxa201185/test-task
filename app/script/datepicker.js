$( function() {
  $("#datepicker").datepicker({
    dateFormat: "d MM, yy",
    showAnim: 'fold'
  });

  $('.date').click( () => $("#datepicker").datepicker("show") );
});