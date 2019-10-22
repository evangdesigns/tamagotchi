import utilities from '../helpers/utilities';

const actions = [
  {
    id: 'fight1',
    name: 'run',
    points: 1,
    icon: 'fas fa-running',
  },
  {
    id: 'fight2',
    name: 'murder death kill',
    points: -10,
    icon: 'fas fa-user-ninja',
  },
];

let strength = 100;

const meterCheck = () => {
  if (strength >= 100) {
    strength = 100;
  } if (strength <= 0) {
    strength = 0;
  }
};

const printFight = () => {
  let domString = '';
  domString += `
    <h1>Fight</h1>
      <div class="selection">
  `;
  actions.forEach((action) => {
    domString += `
    <button type="button" id="${action.name}">
      <i id="${action.id}" class="icon ${action.icon}"></i>
    </button>
    `;
  });
  domString += `
  </div>
  <div class="meter">
    <p>${strength}%</p>
    <span id="strengthMeter"></span>
  </div>
  `;
  utilities.printToDom('fight', domString);
  // eslint-disable-next-line no-use-before-define
  fightListener();
};

const adjustMeter = (e) => {
  if (e.target.id === 'run') {
    strength += actions[0].points;
  } else if (e.target.id === 'murder death kill') {
    strength += actions[1].points;
  }
  meterCheck();
  printFight();
  document.getElementById('strengthMeter').style.width = `${strength}%`;
};

const fightListener = () => {
  document.getElementById('run').addEventListener('click', (e) => {
    adjustMeter(e);
  });
  document.getElementById('murder death kill').addEventListener('click', (e) => {
    adjustMeter(e);
  });
};

export default { printFight };
