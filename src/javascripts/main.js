import '../styles/main.scss';
import print from './components/cards';
import images from './components/images';
import bigCard from './components/bigCard';

const init = () => {
  print.printPlanetCard();
  images.imageReveal();
  bigCard.bigCardReveal();
};

init();
