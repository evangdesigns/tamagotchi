import utilities from '../helpers/utilities';

const activities = [
  {
    id: 'activity1',
    name: 'burger',
    points: -3,
    icon: 'fas fa-hamburger',
  },
  {
    id: 'activity2',
    name: 'pizza',
    points: 10,
    icon: 'fas fa-pizza-slice',
  },
];

let full = 50;

const meterCheck = () => {
  if (full >= 100) {
    full = 100;
  } if (full <= 0) {
    full = 0;
  }
};

const printPlay = () => {
  let domString = '';
  domString += `
    <h1>Play</h1>
      <div class="selection">
  `;
  for (let i = 0; i < activities.length; i += 1) {
    domString += `
    <button type="button" id="${activities[i].name}">
      <i id="${activities[i].id}" class="icon ${activities[i].icon}"></i>
    </button>
    `;
  }
  domString += `
  </div>
  <div class="meter">
    <p>${full}%</p>
    <span id="fullMeter"></span>
  </div>
  `;
  utilities.printToDom('play', domString);
  // eslint-disable-next-line no-use-before-define
  playListener();
};

const adjustMeter = (e) => {
  if (e.target.id === 'burger') {
    full += activities[0].points;
  } else if (e.target.id === 'pizza') {
    full += activities[1].points;
  }
  meterCheck();
  printPlay();
  document.getElementById('fullMeter').style.width = `${full}%`;
};

const playListener = () => {
  document.getElementById('burger').addEventListener('click', (e) => {
    adjustMeter(e);
  });
  document.getElementById('pizza').addEventListener('click', (e) => {
    adjustMeter(e);
  });
};

export default { printPlay };
