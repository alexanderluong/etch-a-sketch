function initPage(blocksPerSide) {
  const gridWidth = 700;
  removeAllSquares();
  let container = document.querySelector(".square-container");

  for (let x = 0; x < blocksPerSide ** 2; x++) {
    let square = document.createElement("div");
    let dimension = Math.floor(gridWidth / blocksPerSide);
    square.className = "square";
    square.style.width = `${dimension}px`;
    square.style.height = `${dimension}px`;
    container.appendChild(square);
    square.addEventListener("mouseover", changeToBlack);
  }
}

function changeToBlack(e) {
  this.style.backgroundColor = "black";
}

function removeAllSquares() {
  let squares = document.querySelectorAll(".square");
  if (squares.length > 0) {
    squares.forEach((square) => square.remove());
  }
}

// Change all the squares to white and change the number of blocks
function clearAllBlocks() {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => (square.style.backgroundColor = "white"));
  let blocksPerSide = prompt("How many blocks per side?") || 4;
  initPage(blocksPerSide);
}

initPage(4);
