import $ from 'jquery';
import p from '../../helpers/data/planets';
import planet from '../printPlanets/printPlanets';


const init = () => {
  $('body').on('keyup', () => {
    const value = $('#user=input').val().toLowerCase();
    const planets = p.getPlanets();
    const getMatch = planets.filter((x) => x.name.toLowerCase().includes(value));
    planet.printPlanets(getMatch);
  });
};

export default { init };
