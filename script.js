
let colour = 'black';

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
};


function changeColour() {
   this.style.backgroundColor = colour;
};

function erase() {
    colour = 'gray';
};

function black() {
    colour = 'rgb(0,0,0)';
    console.log(this.style.backgroundColor);
};

function rgb() {
    if ((colour = 'rgb')) {
        console.log(colour);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let bgColor = "rgb("+r+","+g+","+b+")";
        console.log(bgColor);
        console.log(this.style.backgroundColor);
        this.style.backgroundColor = bgColor;
        console.log(this.style.backgroundColor);
    }
    else {
        this.style.backgroundColor = colour;
    };
};

