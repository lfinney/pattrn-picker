$('.accordion-tab').on('click', (event) => {
  $('.accordion-tab').removeClass('active-tab');
  $('.accordion-article').removeClass('active-article');
  $('.accordion-tab .mobile-button').text('+')
  $(event.target).addClass('active-tab');
  $(event.target).find('.mobile-button').html('&#65293;');
  $(event.target).next('.accordion-article').addClass('active-article');
});

$('.view-content').on('click', (event) => {
  $(event.target).next('.embedded-content').toggleClass('hidden');
});

$(window).resize(() => {
  const viewportWidth = $(window).width();
  if (viewportWidth <= 800) {
    $('nav.embedded-content').addClass('hidden');
  }
  if (viewportWidth > 800) {
    $('nav.embedded-content').removeClass('hidden');
  }
});
