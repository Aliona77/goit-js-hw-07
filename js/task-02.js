
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.getElementById('ingredients')
 console.log(ingredientsList);


const foodIngridient = ingredients.forEach((ingredient) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    ingredientsList.append(itemEl);
});



