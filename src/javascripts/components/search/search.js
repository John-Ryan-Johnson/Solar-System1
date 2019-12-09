import $ from 'jquery';


const planetFilter = (e) => {
  const value = $(e.target).val().toLowerCase();
  const planets = $('.planets');
  planets.hide();
  if (value !== '') {
    planets.filter(`[class*='${value}']`).show();
  } else {
    planets.show();
  }
};

const searchFilter = () => $(document).ready(() => {
  $('#user-input').on('keyup', (e) => {
    planetFilter(e);
  });
});

export default { searchFilter };
