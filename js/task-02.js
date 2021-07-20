const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemsEl = document.querySelector('#ingredients');


const makeItemsList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const result = makeItemsList(ingredients);
itemsEl.append(...result);