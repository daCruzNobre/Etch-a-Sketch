const containerDiv = document.querySelector(".container");

const cellDivArray = [];
for (let index = 0; index < 255; index++)
    {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        containerDiv.appendChild(cell);
        cellDivArray.push(cell);
    }