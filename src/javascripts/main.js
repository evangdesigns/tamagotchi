import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
  sleep.printSleep();
};

init();
