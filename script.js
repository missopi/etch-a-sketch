
function makeGrid(number) {
    let etchGrid = document.querySelector('.grid');
    let squares = etchGrid.querySelectorAll('div');
    etchGrid.style.gridTemplateColumns = `repeat(${number} , 2fr)`;
    etchGrid.style.gridTemplateRows = `repeat(${number} , 2fr)`;

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
        alert('Please keep your response between 1 and 100');
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
};

function erase() {
    colour = 'gray';
};

function black() {
    colour = 'black';
};

function white() {
    colour = 'white';
};

function rgb() {
    if ((colour = 'rgb')) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let bgColor = "rgb("+r+","+g+","+b+")";
        colour = bgColor;
    }
    else {
        this.style = colour;
    };
};

