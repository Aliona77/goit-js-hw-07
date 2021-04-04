const nameInput = document.querySelector("#name-input");
//console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
//console.log(nameOutput);

nameInput.addEventListener('input', hendleInputValue);

function hendleInputValue(event) {
    if (nameInput.value === '') {
        nameOutput.textContent = 'незнакомец';
    }
    else {
        nameOutput.textContent = nameInput.value;
    }
}