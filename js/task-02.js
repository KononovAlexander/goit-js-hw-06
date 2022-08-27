const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

list.innerHTML = ingredients.map((ingredient) =>
  `<li class="item">${ingredient}</li>`).join("");


