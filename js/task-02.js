const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map((ingredient) => { 
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
});
ingredientsList.append(...items);


