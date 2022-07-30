const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const writeElement = ingredients.map((element) => {
  const elementList = document.createElement("li");
  elementList.classList.add("item");
  elementList.textContent = element;
  return elementList;
});

ingredientsList.append(...writeElement);

console.log(writeElement);
