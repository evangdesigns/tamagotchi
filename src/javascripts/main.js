import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';

const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
};

init();
