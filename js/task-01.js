
// Виведення кількості категорій //
const categories = document.getElementById('categories').children.length;
console.log('Number of categories:' + categories);

// виведення назви категорій//
const title = document.querySelectorAll(".item h2");
title.forEach(function(number){
    console.log('Category:' + number.textContent);
} );

// Виведення кількості підкатегорій //

const elementsOfCategory = document.querySelectorAll(".item ul");
elementsOfCategory.forEach(function (list){
    const element = list.children;

console.log('Elements:' + element.length)
})
