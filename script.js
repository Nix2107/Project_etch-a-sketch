let sketchpad = document.querySelector ('#sketch-container')
let drawingColor = 'grey'

function updateColor(color) 
{
    drawingColor = color  
}

let blackColor = document.querySelector ('#black');
blackColor.addEventListener ('click', () => {updateColor('black');});

let greenColor = document.querySelector ('#green');
greenColor.addEventListener ('click', () => {updateColor('green');});

let blueColor = document.querySelector ('#blue');
blueColor.addEventListener ('click', () => {updateColor('blue');});

let redColor = document.querySelector ('#red');
redColor.addEventListener ('click', () => {updateColor('red');});

let rainbowBtn = document.querySelector ('#rainbow');
rainbowBtn.addEventListener ('click', () => {updateColor(rainbow());});

let startSketch = document.querySelector ('#start-sketch');
startSketch.addEventListener ('click', () => {generateGrid();})

function generateGrid(unitsNum = prompt ('Choose the resolution of your sketchpad')) 
{
    sketchpad.setAttribute ('style', `grid-template-columns: repeat(${unitsNum}, 1fr)`,
                            `grid-template-rows: repeat(${unitsNum}, 1fr)`);

    for (let index = 0; index < unitsNum * unitsNum; index++) 
    {
        let gridUnit = document.createElement ('div');
        gridUnit.setAttribute ('class', 'drawing-grid');
        gridUnit.addEventListener ('mousedown', (e) => {e.target.style.backgroundColor = draw()});
        gridUnit.addEventListener ('mouseover', (e) => {e.target.style.backgroundColor = draw ()});
        sketchpad.appendChild (gridUnit);
    }         
}

function draw() 
{
    let randomRed = Math.floor(Math.random()*256);
    let randomGreen = Math.floor(Math.random()*256);
    let randomBlue = Math.floor(Math.random()*256);

    let rainbowC = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return rainbowC;
    
}


