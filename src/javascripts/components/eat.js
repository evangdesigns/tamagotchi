// import utilities from '../helpers/utilities';

// const foods = [
//   { id: 'food1', name: 'burger', points: -3 },
//   { id: 'food2', name: 'steak', points: 10 },
//   { id: 'food3', name: 'salad', points: 10 },
//   { id: 'food4', name: 'taco', points: -3 },
// ];

// const getSelectedFoods = () => {
//   // get all cheese checkboxes
//   const selectedFood = [];
//   // keep the checked foods
//   const cheeseCheckbox = document.getElementsByClassName('cheese');
//   for (let j = 0; j < cheeseCheckbox.length; j += 1) {
//     for (let k = 0; k < foods.length; k += 1) {
//       if (cheeseCheckbox[j].checked && cheeseCheckbox[j].id === foods[k].id) {
//         selectedfoods.push(foods[k]);
//       }
//     }
//   }

//   return selectedfoods;
// };

// const printEat = () => {
//   let domString = '';
//   for (let i = 0; i < foods.length; i + 1) {
//     domString += `
//     <div class='form-group form-check'>
//         <input type='checkbox' class='cheese form-check-input' id='${foods[i].id}'>
//         <label class='form-check-label' for='${foods[i].id}'>${foods[i].name}</label>
//     </div>
//   `;
//   }
//   utilities.printToDom('cheeseCounter', domString);
// };

// export default { printEat, getSelectedFood };
