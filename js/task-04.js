const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValue = document.getElementById('value');

let i = 0;

const incrementButtonFunc = () => {
    i = i + 1;
    counterValue.textContent = i;
}

incrementButton.addEventListener("click", incrementButtonFunc);

const decrementButtonFunc = () => {
    i = i - 1;
    counterValue.textContent = i;
}

decrementButton.addEventListener("click", decrementButtonFunc);