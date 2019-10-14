import utilities from '../helpers/utilities';
import planet from '../helpers/data/planets';
import './cards.scss';

const printPlanetCard = () => {
  const planets = planet.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `
    <div class="planet-card justify-content-center my-auto">
    <div class="single-card text-center">
    <h1 class="planetName">${planets[i].name}</h1>
    <img class="planetImg d-none text-center" src=${planets[i].imageUrl}>
    <p class="planetInfo d-none">${planets[i].description}</p>
    <p class="planetMoons d-none">Number of Moons: ${planets[i].numberOfMoons}</p>
    <p class="largestMoon d-none">Largest Moon: ${planets[i].nameOfLargestMoon}</p>
    </div>
    </div>
    `;
  }
  utilities.printToDom('planet-cards', domString);
};

export default { printPlanetCard };
