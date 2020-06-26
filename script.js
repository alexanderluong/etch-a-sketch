function initPage(blocksPerSide) {
  // TODO: clear the page first
  removeAllSquares();
  let container = document.querySelector(".square-container");

  for (let x = 0; x < blocksPerSide ** 2; x++) {
    let square = document.createElement("div");
    square.className = "square";
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
  let blocksPerSide = prompt("How many blocks per side?");
  initPage(blocksPerSide);
}

initPage(4);
