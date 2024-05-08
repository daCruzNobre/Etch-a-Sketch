// get html elements
const containerDiv = document.querySelector(".container");
const promptButton = document.querySelector(".promptButton");
const resetButton = document.querySelector(".resetButton");

// Constants
const INITIAL_CELL_NUMBER = 16;
// VAriables
const cellDivArray = [];

/**
 * Function that generates a random number between two number(inclusive)
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/**
 * Function that generates the cells at the designated div
 * @param {*} cellNumber 
 */
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
            // add the event listner to the cells
            cell.setAttribute("class", "cell");
            cell.addEventListener("pointerover", () => {
                cell.style.backgroundColor = backgroundColor1;
            })            
            containerDiv.appendChild(cell);
            // push cells into a array
            cellDivArray.push(cell);
           
        }
}

/**
 * Add reset functionality to reset button
 */
resetButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.remove());
    generateGrid(INITIAL_CELL_NUMBER);
});

/**
 * Add prompot to the promptButton
 * Validate value
 */
promptButton.addEventListener("click", () =>{
    let cellNumber = prompt("How many cells do you want in yout grid?(from 1 to 100)")
    if (cellNumber <1 || cellNumber > 100)
        {
            window.alert("You entered an invalid number!\n Please enter a number between 1 and 100.")
        }
        else{
            const cells = document.querySelectorAll(".cell");
            cells.forEach((cell) => cell.remove());
            generateGrid(cellNumber);
        }
});

/**
 * call generate grid function with initial value
 */
generateGrid(INITIAL_CELL_NUMBER);