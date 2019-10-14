import utilities from '../helpers/utilities';

const foods = [
  {
    id: 'food1',
    name: 'burger',
    points: -3,
    icon: 'fas fa-hamburger',
  },
  {
    id: 'food2',
    name: 'pizza',
    points: 10,
    icon: 'fas fa-pizza-slice',
  },
];

let full = 50;

const printEat = () => {
  let domString = '';
  domString += `
    <h1>EAT</h1>
      <div class="selection">
  `;
  for (let i = 0; i < foods.length; i += 1) {
    domString += `
    <button id="${foods[i].name}" class="icon">
      <i id="${foods[i].id}" class="${foods[i].icon}"></i>
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
  utilities.printToDom('eat', domString);
};

const adjustMeter = (e) => {
  if (e.target.id === 'burger') {
    full += foods[0].points;
    printEat();
  } else if (e.target.id === 'pizza') {
    full += foods[1].points;
    printEat();
  }
};

const eatListener = () => {
  document.getElementById('burger').addEventListener('click', (e) => {
    adjustMeter(e);
  });
  document.getElementById('pizza').addEventListener('click', (e) => {
    adjustMeter(e);
  });
};

export default { printEat, eatListener };
