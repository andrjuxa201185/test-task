$( function() {
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

  $('.location').click(() => $( "#location" ).focus());
});