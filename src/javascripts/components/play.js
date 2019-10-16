import utilities from '../helpers/utilities';

const activities = [
  {
    id: 'activity1',
    name: 'sking',
    points: 50,
    icon: 'fas fa-skiing',
  },
  {
    id: 'activity2',
    name: 'chess',
    points: 2,
    icon: 'fas fa-chess',
  },
];

let fun = 50;

const meterCheck = () => {
  if (fun >= 100) {
    fun = 100;
  } if (fun <= 0) {
    fun = 0;
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
    <p>${fun}%</p>
    <span id="funMeter"></span>
  </div>
  `;
  utilities.printToDom('play', domString);
  // eslint-disable-next-line no-use-before-define
  playListener();
};

// playDegridator = () => {
//   setInterval(fun -= 2, 3000);
//   printPlay();
// };
const adjustMeter = (e) => {
  if (e.target.id === 'sking') {
    fun += activities[0].points;
  } else if (e.target.id === 'chess') {
    fun += activities[1].points;
  }
  meterCheck();
  printPlay();
  document.getElementById('funMeter').style.width = `${fun}%`;
};

const playListener = () => {
  document.getElementById('sking').addEventListener('click', (e) => {
    adjustMeter(e);
  });
  document.getElementById('chess').addEventListener('click', (e) => {
    adjustMeter(e);
  });
};

export default { printPlay };
