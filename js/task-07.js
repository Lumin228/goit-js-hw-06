const inputConteo = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputConteo.addEventListener("input", (event) => {
    const fontSize = event.currentTarget.value;
    textSpan.style.fontSize = fontSize + "px";
});
