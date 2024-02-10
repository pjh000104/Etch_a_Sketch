const body = document.querySelector('body');
const container = document.querySelector('#container');

const GridSizeBtn = document.querySelector('#GridSizeBtn');
const GridSize = 16;

GridSizeBtn.addEventListener('click', () => {
   alert("hello");
});

function makeGrid1() {
   for(let i = 0; i<16; i++) {
      const gridBoxColumn = document.createElement('div');
      gridBoxColumn.classList.add('gridBoxColumn');
      container.appendChild(gridBoxColumn);
      for(let j = 0; j<16; j++) {
         const gridBoxRow = document.createElement('div');
         gridBoxRow.classList.add('gridBoxRow');
         gridBoxColumn.appendChild(gridBoxRow);
      }
   }
}

makeGrid1();

