import '../styles/main.scss';
import print from './components/cards';
import images from './components/images';

const init = () => {
  print.printPlanetCard();
  images.imageReveal();
};

init();
