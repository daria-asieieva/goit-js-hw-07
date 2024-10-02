`use strict`
const elements = document.querySelectorAll('#categories .item');


console.log(`Number of categories: ${elements.length}`);

elements.forEach(element => {
    const elementName = element.querySelector('h2');
    console.log(`Category: ${elementName.textContent}`);

    const elementQuantity = element.querySelectorAll('ul li');
    console.log(`Elements: ${elementQuantity.length}`);
});




