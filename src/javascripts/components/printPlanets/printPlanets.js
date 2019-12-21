import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planetsData from '../../helpers/data/planetsData';
import './printPlanets.scss';

const printPlanets = () => {
  planetsData.getPlanets().then((planets) => {
    let domString = '';
    for (let i = 0; i < planets.length; i += 1) {
      domString += `
    <div class="planet-card" id="${planets[i].name}" style="width:30rem;">
    <div class="single-card">
    <h2 class="title text-center">${planets[i].name}</h2>
    <div class="image d-flex justify-content-center" style="height: 100%; width: 100%;">
    <img src="${planets[i].imageUrl}" class="card-img-top" alt="image of ${planets[i].name}">
    </div>
    </div>
    </div>
    `;
    }
    utilities.printToDom('planet-card', domString);
  });
};

const hideImage = () => {
  $('.card-img-top').hide();
};

export default
{
  printPlanets,
  hideImage,
};
