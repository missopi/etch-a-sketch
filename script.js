
let colour = 'red';

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
        square.style.backgroundColor = 'red';
        square.addEventListener('mouseover', changeColour);
        etchGrid.insertAdjacentElement('beforeend', square);
    };
};

makeGrid(16);

function resetGrid() {
    let etchGrid = document.querySelector('.grid');
    let squares = etchGrid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'red');
};


function changeColour() {
   this.style.backgroundColor = colour;
};

function erase() {
    colour = 'rgb(255,255,255)';
};

function black() {
    colour = 'black';
};

function rgb() {
    if ((colour = 'rgb')) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    else {
        this.style.backgroundColor = colour;
    };
};

