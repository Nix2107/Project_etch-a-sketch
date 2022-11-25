let sketchpad = document.querySelector ('#sketch-container');
let chosenColor = 'white';

let blackColor = document.querySelector ('#black');
blackColor.addEventListener ('click', () => {chosenColor = 'black'});

let blueColor = document.querySelector ('#blue');
blueColor.addEventListener ('click', () => {chosenColor = 'blue'});

let greenColor = document.querySelector ('#green');
greenColor.addEventListener ('click', () => {chosenColor = 'green'});

let rainbow = document.querySelector ('#rainbow');
rainbow.addEventListener ('click', () => {let greenAmount = Math.floor(Math.random ()* 256);
                                            let blueAmount = Math.floor(Math.random ()* 256);
                                            let redAmount = Math.floor(Math.random ()* 256);
                                    chosenColor = `rgb(${redAmount}, ${greenAmount}, ${blueAmount})`});

function generateGrid(unitsNum = prompt ('Choose the resolution of your sketchpad')) 
{
    sketchpad.setAttribute ('style', `grid-template-columns: repeat(${unitsNum}, 1fr)`,
                            `grid-template-rows: repeat(${unitsNum}, 1fr)`);

    for (let index = 0; index < unitsNum * unitsNum; index++) 
    {
        let gridUnit = document.createElement ('div');
        gridUnit.setAttribute ('class', 'drawing-grid');
        gridUnit.addEventListener ('mousedown', (e) => {e.target.style.backgroundColor = `${chosenColor}`});
        gridUnit.addEventListener ('mouseover', (e) => {e.target.style.backgroundColor = `${chosenColor}`});
        sketchpad.appendChild (gridUnit);
    }  
        
}


let startSketch = document.querySelector ('#start-sketch');
startSketch.addEventListener ('click', () => {generateGrid();})



