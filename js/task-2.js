const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ingredientsList = ingredients.map(value => {
  let item = document.createElement('li');
  item.textContent = value;
  return item;
});

const getNodeListToString = function (nodesList) {
  return nodesList.map(element => element.outerHTML).join('');
};

document
  .querySelector('#ingredients')
  .insertAdjacentHTML('afterbegin', getNodeListToString(ingredientsList));
