$('.accordion-tab').on('click', (event) => {
  $('.accordion-tab').removeClass('active-tab');
  $('.accordion-article').removeClass('active-article');
  $('.accordion-tab .mobile-button').text('+')
  $(event.target).addClass('active-tab');
  $(event.target).find('.mobile-button').html('&#65293;');
  $(event.target).next('.accordion-article').addClass('active-article');
});

$('.view-button').on('click', (event) => {
  $(event.target).next('.embedded-code').toggleClass('hidden');
});
