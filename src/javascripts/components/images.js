import $ from 'jquery';


const imageReveal = () => {
  $(document).on('mouseover mouseleave', '.single-card', (e) => {
    const card = $(e.target);
    if (card.hasClass('single-card')) {
      card.find('.planetImg').toggleClass('d-none');
      card.find('.planetName').toggleClass('d-none');
    }
  });
};
export default { imageReveal };
