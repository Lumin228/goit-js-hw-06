const categoriesList = document.querySelectorAll('li.item');

console.log("Number of categories:" + " " + categoriesList.length)

categoriesList.forEach(li => {
    let firstItem = li.firstElementChild;
    console.log("Category :" + " " + firstItem.textContent);
    let secondItem = li.lastElementChild.querySelectorAll('li');
    console.log("Elements :" + " " + secondItem.length);
});
