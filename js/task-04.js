const button = {
    addBtn: document.querySelector("[data-action = 'increment']"),
    subtractBtn: document.querySelector("[data-action = 'decrement']"),
    span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
    counterValue += 1;

    button.span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    button.span.textContent = counterValue;
};
button.addBtn.addEventListener("click", increment);
button.subtractBtn.addEventListener("click", decrement);

 