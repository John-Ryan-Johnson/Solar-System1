import '../styles/main.scss';
import './components/images.scss';
import './components/info.scss';
import print from './components/cards';
import images from './components/images';
import info from './components/info';
import bigCard from './components/bigCard';

const init = () => {
  print.printPlanetCard();
  images.imageReveal();
  info.infoReveal();
  bigCard.bigCardReveal();
};

init();
