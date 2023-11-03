const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
if(textInput.textContent = false){output.textContent = "Anonymous"}
else {textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
  });
}
