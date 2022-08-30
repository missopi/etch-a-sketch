
let grid = document.getElementById('grid');
let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');
const clearBtn = document.getElementById('clear');
const blackBtn = document.getElementById('black');
const colourBtn = document.getElementById('rgb');
const eraseBtn = document.getElementById('erase');

// creates rows for grid
function makeRows(rowNumber) {
    for (i = 0; i < rowNumber; i++) {
        let row = document.createElement("div");
        grid.appendChild(row).className = "row";
    };
};

// creates columns for grid
function makeColumns(colNumber) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colNumber; j++) {
            let newColumn = document.createElement("div");
            rows[j].appendChild(newColumn).classList = "column";
        };
    };
};

// creates a grid to a specific size 
function createGrid() {
    makeRows(16);
    makeColumns(16);
};

createGrid();

let currentMode = '';


grid.addEventListener('pointerdown', function(e) {
    grid.addEventListener('pointerover', function(e) {
        if (e.target.className == 'column' || e.target.className == 'row') {
        e.target.classList.replace('column', 'colour');
        };
    });
    grid.addEventListener('pointerover', changeColour);
});

clearBtn.addEventListener("click", function(e) {
    if (e.target.id == 'clear') {
        grid.innerHTML = ""; // clears out old grid so doesn't stack on top of each other
        createGrid();
        console.log(e.target.id);
    };
});


function changeColour(e) {
    console.log(e.target.className);
    if (e.target.className === 'colour') {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    else if (e.target.className === 'erase') {
        e.target.style.backgroundColor = '#ffffff';
    }
    else if (e.target.className === 'black') {
        e.target.style.backgroundColor = '#000000';
    }
};

colourBtn.addEventListener("click", function(e) {
    if (e.target.id == 'rgb') {
        console.log(e.target.id);
        changeColour('rgb'); 
    }
});

blackBtn.addEventListener("click", function(e) {
    if (e.target.id == 'black') {
        console.log(e.target.id);
        changeColour('black'); 
    }
});

eraseBtn.addEventListener("click", function(e) {
    if (e.target.id == 'erase') {
        console.log(e.target.id);
        changeColour('erase'); 
    }
});
