
const categoriesList = document.querySelectorAll('li.item');

console.log("Number of categories:" + " " + categoriesList.length)

const atributte = document.querySelectorAll('.item');

atributte.forEach(li => {
    let firstItem = li.querySelector('h2')
    console.log("Category :" + " " + firstItem.textContent)
    let secondItem = li.querySelectorAll('ul>li')
    console.log("Elements :" + " " + secondItem.length)
});