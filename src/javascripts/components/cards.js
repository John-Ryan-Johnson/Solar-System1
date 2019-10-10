import utilities from '../helpers/utilities';
import planet from '../helpers/data/planets';
import './cards.scss';

const printPlanetCard = () => {
  const planets = planet.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `
    <div class="planet-card">
    <div class="single-card text-center mb-4">
    <h1 class="planetName">${planets[i].name}</h1>
    </div>
    </div>
    `;
  }
  utilities.printToDom('planet-cards', domString);
};

export default { printPlanetCard };
