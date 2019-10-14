import $ from 'jquery';

const bigCardReveal = () => {
  $(document).on('click', '.single-card', (e) => {
    const card = $(e.target);
    if (card.hasClass('d-none')) {
      $('.single-card').hide();
    }
  });
};

export default { bigCardReveal };
