import 'bootstrap';
import '../styles/main.scss';
import print from './components/printPlanets/printPlanets';
import hover from './components/cardHover/cardHover';
import card from './components/cardClick/cardClick';
import search from './components/search/search';

const init = () => {
  print.printPlanets();
  print.hideImage();
  hover.hoverImage();
  card.clickReveal();
  card.closeCard();
  search.init();
};

init();
