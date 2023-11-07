

const buttn = document.querySelector(".change-color");
const boddy = document.querySelector("body");
const spann = document.querySelector(".color")

buttn.addEventListener("click", () => {
 

  const selectedColor =  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  spann.textContent = `${selectedColor}`;
  boddy.style.background = selectedColor;
})

