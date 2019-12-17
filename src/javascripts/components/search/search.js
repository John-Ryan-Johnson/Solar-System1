import $ from 'jquery';

const filterPlanet = (value) => {
  $('.planet-card').each((index, card) => {
    if (card.id.toLowerCase().includes(value)) {
      $(card).show();
    } else {
      $(card).hide();
    }
  });
};

const searchBar = () => {
  $('.searchBar').on('keyup', () => {
    const input = $('#user-input').val().toLowerCase();
    filterPlanet(input);
  });
};

const activateSearch = () => {
  $('.searchBar').on('click', '.btn', (e) => {
    e.preventDefault();
    const input = $('#user-input').val().toLowerCase();
    filterPlanet(input);
  });
};

activateSearch();

export default { searchBar };
