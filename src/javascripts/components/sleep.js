import utilities from '../helpers/utilities';

const sleeps = [
  {
    id: 'sleep1',
    name: 'nap',
    points: 50,
    icon: 'fas fa-hourglass-half',
  },
  {
    id: 'sleep2',
    name: 'deep sleep',
    points: 60,
    icon: 'fas fa-bed',
  },
];

let energy = 50;

const meterCheck = () => {
  if (energy >= 100) {
    energy = 100;
  } if (energy <= 0) {
    energy = 0;
  }
};

const printSleep = () => {
  let domString = '';
  domString += `
    <h1>SLEEP</h1>
      <div class="selection">
  `;
  sleeps.forEach((action) => {
    domString += `
    <button type="button" id="${action.name}">
      <i id="${action.id}" class="icon ${action.icon}"></i>
    </button>
    `;
  });
  domString += `
  </div>
  <div class="meter">
    <p>${energy}%</p>
    <span id="energyMeter"></span>
  </div>
  `;
  utilities.printToDom('sleep', domString);
  // eslint-disable-next-line no-use-before-define
  sleepListener();
};

const adjustMeter = (e) => {
  if (e.target.id === 'nap') {
    energy += sleeps[0].points;
  } else if (e.target.id === 'deep sleep') {
    energy += sleeps[1].points;
  }
  meterCheck();
  printSleep();
  document.getElementById('energyMeter').style.width = `${energy}%`;
};

const sleepListener = () => {
  document.getElementById('nap').addEventListener('click', (e) => {
    adjustMeter(e);
  });
  document.getElementById('deep sleep').addEventListener('click', (e) => {
    adjustMeter(e);
  });
};

export default { printSleep };
