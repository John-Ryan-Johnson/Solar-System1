import '../styles/main.scss';
import print from './components/cards';
import images from './components/images';
import info from './components/info';

const init = () => {
  print.printPlanetCard();
  images.imageReveal();
  info.infoReveal();
};

init();
