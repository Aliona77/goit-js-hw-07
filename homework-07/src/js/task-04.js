const button = {
    incrementBtn: document.querySelector("[data-action = 'increment']"),
    decrementBtn: document.querySelector("[data-action = 'decrement']"),
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
button.incrementBtn.addEventListener("click", increment);
button.decrementBtn.addEventListener("click", decrement);

 