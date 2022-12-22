function toggleInfoPanel(evt) {
  $(this).siblings('.menu-item-info').toggleClass('visible');
}

$('.menu-item a').on("mouseover", toggleInfoPanel)
                   .on("mouseout", toggleInfoPanel); 