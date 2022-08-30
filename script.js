
//const clearBtn = document.getElementById('clear');
//const blackBtn = document.getElementById('black');
////const colourBtn = document.getElementById('rgb');
//const eraseBtn = document.getElementById('erase');

function makeGrid(size) {
    let etchGrid = document.querySelector('.grid');
    etchGrid.style.gridTemplateColumns = "repeat(16 , 2fr)";
    console.log(etchGrid.style.gridTemplateColumns)
    etchGrid.style.gridTemplateRows = "repeat(16 , 2fr";
    console.log(etchGrid.style.gridTemplateColumns)

    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'red';
        square.addEventListener('mouseover', changeColour);
        etchGrid.insertAdjacentElement('beforeend', square);
    };
};

makeGrid(16);


//let currentMode = '';


//grid.addEventListener('pointerdown', function(e) {
   // grid.addEventListener('pointerover', function(e) {
  //      if (e.target.className == 'column' || e.target.className == 'row') {
   //     e.target.classList.replace('column', 'colour');
  //      };
 //   });
 //   grid.addEventListener('pointerover', changeColour);
//});

//clearBtn.addEventListener("click", function(e) {
  //  if (e.target.id == 'clear') {
//        grid.innerHTML = ""; // clears out old grid so doesn't stack on top of each other
   //     createGrid();
   //     console.log(e.target.id);
  //  };
//});


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
   this.style.backgroundColor = 'black';
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

//eraseBtn.addEventListener("click", function(e) {
   // if (e.target.id == 'erase') {
    //    console.log(e.target.id);
  //  }
//});
