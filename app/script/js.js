$( function() {
    $( "#datepicker" ).datepicker();
    $( "#datepicker" ).datepicker( "option", "dateFormat", "d MM, yy" );
    $( "#datepicker" ).datepicker( "option", "showAnim", 'fold');

    const citys = [];

    $.get('../data/location.json')
        .then(({ areas }) => {
            for (const val of areas) {
                for (const city of val.areas) {
                    citys.push(city.name);
                }
            }
        });

    $( "#location" ).autocomplete({
        source: citys
     });
} );