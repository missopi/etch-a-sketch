
const clearBtn = document.getElementById('clear');
const blackBtn = document.getElementById('black');
const colourBtn = document.getElementById('rgb');
const eraseBtn = document.getElementById('erase');

let colour = 'RGB(0,0,0)';

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
    squares.forEach((div) => div.remove());
};


function changeColour() {
   // console.log(e.target.className);
  //  if (e.target.className === 'colour') {
  //      let r = Math.floor(Math.random() * 256);
  //      let g = Math.floor(Math.random() * 256);
  //      let b = Math.floor(Math.random() * 256);
   // e.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  //  }
  //  else if (e.target.className === 'erase') {
  //this.style.backgroundColor = '#ffffff';
  //  }
   // else if (e.target.className === 'black') {
   this.style.backgroundColor = colour;
   // }
};

//colourBtn.addEventListener("click", function(e) {
   // if (e.target.id == 'rgb') {
//        console.log(e.target.id); 
//    }
//});

//blackBtn.addEventListener("click", function(e) {
  //  if (e.target.id == 'black') {
 //       console.log(e.target.id);
  //  }
//});
