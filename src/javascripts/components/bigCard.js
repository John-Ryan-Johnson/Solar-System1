import $ from 'jquery';

const bigCardReveal = () => {
  $(document).on('click', '.single-card', (e) => {
    const card = $(e.target);
    $('<p>X</p>').prependTo('.single-card');
    $('.single-card p:first-child').addClass('close');
    if (card.hasClass('d-none')) {
      $('.single-card').hide();
    }
  });
};

export default { bigCardReveal };
