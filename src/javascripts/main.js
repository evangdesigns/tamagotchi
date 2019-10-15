import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import eat from './components/eat';
import play from './components/play'

const init = () => {
  eat.printEat();
  play.printPlay();
};

init();
