const containerDiv = document.querySelector(".container");
const promptButton = document.querySelector(".promptButton");
const resetButton = document.querySelector(".resetButton");
const INITIAL_CELL_NUMBER = 16;

const cellDivArray = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function generateGrid(cellNumber){
    let gridCellNumber = cellNumber * cellNumber
    for (let index = 0; index < gridCellNumber; index++)
        {
            let rgbOne = getRndInteger(0,255);
            let rgbTwo = getRndInteger(0,255);
            let rgbThree = getRndInteger(0,255);            
            let opacityLevel = Math.random();
            let backgroundColor1 = "rgb(" + rgbOne + " " + rgbTwo + " " + rgbThree + " " + "/" + " " + opacityLevel+ ")";
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.addEventListener("pointerover", () => {
                cell.style.backgroundColor = backgroundColor1;
            })            
            containerDiv.appendChild(cell);
            cellDivArray.push(cell);
           
        }
}

resetButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.remove());
    generateGrid(INITIAL_CELL_NUMBER);
});


promptButton.addEventListener("click", () =>{ 
    let cellNumber = prompt("How many cells do you want in yout grid?(from 1 to 100)")
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.remove());
    generateGrid(cellNumber);
});

generateGrid(INITIAL_CELL_NUMBER);