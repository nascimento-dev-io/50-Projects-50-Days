const numbers = document.querySelectorAll(".number");
let numbersLength = numbers.length;

numbers.forEach((numberField) => {
  numberField.addEventListener("keyup", (event) => {
    const lastNumber = event.target.parentNode.lastElementChild;
    const firstNumber = event.target.parentNode.firstElementChild;

    if (event.target.value && event.target !== lastNumber) {
      event.target.nextElementSibling.focus();
    }

    if (event.target !== firstNumber && event.key === "Backspace") {
      event.target.previousElementSibling.focus();
    }
  });
});
