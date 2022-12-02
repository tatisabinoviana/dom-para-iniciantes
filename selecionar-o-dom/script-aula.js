const animais = document.getElementById('animais');

const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);

const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

const linkInternos = document.querySelector('[href^="#"]');
// console.log(linkInternos.href);

const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg[1]);

const griSectionHTML = document.getElementsByClassName('grid-section');
const griSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(griSectionHTML);
// console.log(griSectionNode);

griSectionNode.forEach(function (item) {
  console.log(item);
});

// const arrayGrid = Array.from(griSectionHTML);
// console.log(arrayGrid);
// arrayGrid.pop();
// console.log(arrayGrid);
