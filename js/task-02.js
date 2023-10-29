const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const uls = document.querySelector('ul#ingredients')
ingredients.forEach(txt => {
  const makeEl = document.createElement("li");
  makeEl.textContent = txt;
  makeEl.classList.add(".item")
  uls.append(makeEl)
});
console.log(uls)