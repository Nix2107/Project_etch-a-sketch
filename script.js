let sketchpad = document.querySelector ('#sketch-container')

function generateGrid(unitsNum = prompt ('Choose the resolution of your sketchpad')) 
{
    sketchpad.setAttribute ('style', `grid-template-columns: repeat(${unitsNum}, 1fr)`,
                            `grid-template-rows: repeat(${unitsNum}, 1fr)`);

    for (let index = 0; index < unitsNum * unitsNum; index++) 
    {
        let gridUnit = document.createElement ('div');
        gridUnit.setAttribute ('class', 'drawing-grid');
        gridUnit.addEventListener ('mouseover', () => {setcolorMode()});
        sketchpad.appendChild (gridUnit);
    }  

}

let startSketch = document.querySelector ('#start-sketch');
startSketch.addEventListener ('click', () => {generateGrid();})



