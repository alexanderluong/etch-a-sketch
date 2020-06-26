function initPage() {
  let container = document.querySelector(".square-container");

  for (let x = 0; x < 16; x++) {
    let square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
    square.addEventListener("mouseover", changeToBlack);
  }
}

function changeToBlack(e) {
  this.style.backgroundColor = "black";
}

initPage();
