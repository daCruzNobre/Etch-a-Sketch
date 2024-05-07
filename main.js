const containerDiv = document.querySelector(".container");
const promptButton = document.querySelector(".promptButton");
const INITIAL_CELL_NUMBER = 16;

const cellDivArray = [];
function generateGrid(cellNumber){
    let gridCellNumber = cellNumber * cellNumber
    for (let index = 0; index < gridCellNumber; index++)
        {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.addEventListener("pointerover", () => {
                cell.style.backgroundColor = "white";
            })
            containerDiv.appendChild(cell);
            cellDivArray.push(cell);
        }
}



promptButton.addEventListener("click", () =>{ 
    let cellNumber = prompt("How many cells do you want in yout grid?(from 1 to 100)")
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.remove());
    generateGrid(cellNumber);
});

generateGrid(INITIAL_CELL_NUMBER);