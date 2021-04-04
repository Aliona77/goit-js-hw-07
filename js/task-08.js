const input = document.querySelector('input');
console.log(input);

const renderBtn = document.querySelector('button[data-action="render"]');
console.log(renderBtn);

const destroyBtn = document.querySelector('button[data-action="destroy"]');
console.log(destroyBtn);

const boxes = document.querySelector('#boxes');
console.log(boxes);

renderBtn.addEventListener('click', createBoxes);


function createBoxes(amount) {
    amount = input.value;
   
    for (let i = 0; i < amount; i++){
        const div = document.createElement('div');
        boxes.appendChild(div);
        div.classList.add('box')
        
        div.style.backgroundColor = colors[randomizer(colors.length)];
        
    }
     const boxesArray = boxes.querySelectorAll('div');
    console.log(boxesArray );
}
const colors = ["red", "blue", "green", "black"];

const randomizer = max => {
    return Math.floor(Math.random() * max);
};

destroyBtn.addEventListener('click', () => {
    boxes.innerHTML = "";
});
