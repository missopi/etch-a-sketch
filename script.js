
let grid = document.getElementById('grid');
let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');
const clearBtn = document.getElementById('clear');

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

grid.addEventListener('pointerdown', function(e) {
    grid.addEventListener('pointerover', function(e) {
        if (e.target.className == 'column' || e.target.className == 'row') {
        e.target.classList.replace('column', 'color');
        };
    });
});

clearBtn.addEventListener("click", function() {
    makeRows(16);
    makeColumns(16);
    createGrid();
});
