$( function() {
  const listSliderItem = $('.slider-inner-item');

  $( function() {
    $( "#slider-range-max" ).slider({
      animate: "slow",
      range: "max",
      min: 1,
      max: 4,
      value: 1,
      change: function(event, ui) {
        if (listSliderItem[0]) {
          for (const item of listSliderItem) {
            if (item.dataset.item == ui.value) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          }
        }
      },
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

  $('.slider-control-desc').click((e) => {
    const item = e.target.closest('.slider-control-desc>div');
    if (!item) return;
    $("#slider-range-max").slider("value", item.dataset.range);
  });
});