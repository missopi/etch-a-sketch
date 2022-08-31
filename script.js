
function makeGrid(number) {
    let etchGrid = document.querySelector('.grid');
    let squares = etchGrid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    etchGrid.style.gridTemplateColumns = `repeat(${number} , 2fr)`;
    console.log(etchGrid.style.gridTemplateColumns)
    etchGrid.style.gridTemplateRows = `repeat(${number} , 2fr)`;
    console.log(etchGrid.style.gridTemplateColumns)

    let total = number * number;
    for (let i = 0; i < total; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'gray';
        square.addEventListener('mouseover', changeColour);
        etchGrid.insertAdjacentElement('beforeend', square);
    };
};

makeGrid(16);

function resetGrid() {
    let etchGrid = document.querySelector('.grid');
    let squares = etchGrid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'gray');
    makeGrid(16);
    colour = 'black';
};

function changeGridSize() {
    let number = prompt('Pick a grid size from 1 to 100',' ') 
    while (number > 100 || number < 1) {
        alert('Please keep you response between 1 to 100');
        number = prompt('Pick a grid size from 1 to 100',' ') 
    };
    let total = number * number;
    for (let i = 0; i < total; i++) {
        let etchGrid = document.querySelector('.grid');
        let squares = etchGrid.querySelectorAll('div');
        squares.forEach((div) => div.style.backgroundColor = 'gray');
    };
    makeGrid(number);
};

let colour = 'black';

function changeColour() {
   this.style.backgroundColor = colour;
   console.log(this.style.backgroundColor);
};

function erase() {
    colour = 'gray';
    console.log(this.style);
};

function black() {
    colour = 'black';
    console.log(this.style); 
};

function white() {
    colour = 'white';
    console.log(this.style); 
};

function rgb() {
    if ((colour = 'rgb')) {
        console.log(colour);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let bgColor = "rgb("+r+","+g+","+b+")";
        console.log(bgColor);
        colour = bgColor;
        console.log(this.style);
    }
    else {
        this.style = colour;
    };
};

