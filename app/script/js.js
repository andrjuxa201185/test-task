$( function() {
    $( "#datepicker" ).datepicker();
    $( "#datepicker" ).datepicker( "option", "dateFormat", "d MM, yy" );
    $( "#datepicker" ).datepicker( "option", "showAnim", 'fold');

    let citys;
    $.get('../data/location.json', (...data) => {
        console.log(data);
    })

    console.log(citys);
    $( "#location" ).autocomplete({
        source: citys
     });
} );