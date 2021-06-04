const checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", checkChanges);
});

function checkChanges({ target }) {
  const arrChecks = Array.from(checkboxes);

  const checkFiltered = arrChecks.filter((check) => check.checked);

  let checkOff = 0;

  if (checkFiltered.length === 3) {
    while (checkFiltered[checkOff] === target) {
      checkOff = Math.ceil(Math.random() * 2);
    }

    checkFiltered[checkOff].checked = false;
  }
}
