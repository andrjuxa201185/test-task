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

    $( function() {
      $( "#slider-range-max" ).slider({
        range: "max",
        min: 1,
        max: 4,
        value: 2,
        slide: function(event, ui) {
          console.log(ui.value);
          // $('.slider-inner').html(ui.value);
        }
      });

    } );
} );