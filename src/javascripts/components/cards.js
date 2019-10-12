import utilities from '../helpers/utilities';
import planet from '../helpers/data/planets';
import './cards.scss';

const printPlanetCard = () => {
  const planets = planet.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `
    <div class="planet-card">
    <div class="single-card text-center">
    <h1 class="planetName">${planets[i].name}</h1>
    <img class="planetImg d-none" src=${planets[i].imageUrl}>
    <p class="info d-none">${planets[i].description}</p>
    </div>
    </div>
    `;
  }
  utilities.printToDom('planet-cards', domString);
};

export default { printPlanetCard };
