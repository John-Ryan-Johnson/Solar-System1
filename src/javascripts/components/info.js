import $ from 'jquery';


const infoReveal = () => {
  $(document).on('click', '.single-card', (e) => {
    const card = $(e.target);
    $('.single-card').css('height', '100%');
    $('.single-card').css('padding', '20px');
    if (card.hasClass('single-card')) {
      card.find('.planetInfo').toggleClass('d-none');
      card.find('.planetMoons').toggleClass('d-none');
      card.find('.largestMoon').toggleClass('d-none');
    }
  });
};

export default { infoReveal };
