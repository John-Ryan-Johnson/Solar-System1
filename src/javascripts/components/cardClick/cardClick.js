import $ from 'jquery';
import planet from '../../helpers/data/planetsData';
import utilities from '../../helpers/utilities';
import './cardClick.scss';
import cardHover from '../cardHover/cardHover';
import print from '../printPlanets/printPlanets';


const reveal = (singlePlanet) => {
  let domString = '';
  const planets = planet.getPlanets();
  for (let i = 0; i < planets.length; i += 1) {
    if (singlePlanet === `${planets[i].name}`) {
      domString = `
    <div class="card text-center">
    <button class="close d-flex justify-content-end">X</button>
  <div class="card-header">
    <h1>${planets[i].name}</h1>
  </div>
  <div class="card-body">
  <div id="image" class="d-flex justify-content-center">
    <img src="${planets[i].imageUrl}" class="card-img-top" alt="image of ${planets[i].name}">
  </div>
    <div class="card-text text-center">
    <h4>${planets[i].description}</h5>
    </div>
    <div class="info">
    <h5>Number of Moons: ${planets[i].numberOfMoons}</h5>
    <h5>Largest Moon: ${planets[i].nameOfLargestMoon}</h5>
    </div>
  
    `;
    }
  }
  utilities.printToDom('fullCard', domString);
};


const clickReveal = () => {
  $('.single-card').on('click', (event) => {
    const singlePlanet = event.target.id;
    reveal(singlePlanet);
    $('.searchBar').hide();
    $('#planet-card').html('');
  });
};

const closeCard = () => {
  $('body').on('click', '.close', () => {
    $('#fullCard').html('');
    $('.searchBar').show();
    print.printPlanets();
    print.hideImage();
    cardHover.hoverImage();
    clickReveal();
  });
};

export default { clickReveal, closeCard };
