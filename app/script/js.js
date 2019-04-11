$( function() {
  $( "#datepicker" ).datepicker({
    dateFormat: "d MM, yy",
    showAnim: 'fold'
  });

  // get list of citys from data.json 
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

  const listSliderItem = $('.slider-inner-item');

  $( function() {
    $( "#slider-range-max" ).slider({
      animate: "slow",
      range: "max",
      min: 1,
      max: 4,
      value: 1,
      slide: function(event, ui) {
        if (listSliderItem[0]) {
          for (const item of listSliderItem) {
            if (item.dataset.item == ui.value) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          }
        }
      }
    });
  });
});