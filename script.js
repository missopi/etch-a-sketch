
let grid = document.getElementById('grid');
let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');

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
function setGrid() {
    makeRows(16);
    makeColumns(16);
};

setGrid();
