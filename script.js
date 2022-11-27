let sketchpad = document.querySelector ('#sketch-container')
let drawingColor
let rainbowMode = 'inactive'
let colorMode = 'inactive'
let mouseState = 'up'

let blackColor = document.querySelector ('#black');
blackColor.addEventListener ('click', () => {colorMode = 'active';
                                            updateColor('black');});

let greenColor = document.querySelector ('#green');
greenColor.addEventListener ('click', () => {colorMode = 'active';
                                            rainbowMode = 'inactive';
                                            updateColor('green');});

let blueColor = document.querySelector ('#blue');
blueColor.addEventListener ('click', () => {colorMode = 'active';
                                            rainbowMode = 'inactive';
                                            updateColor('blue');});

let redColor = document.querySelector ('#red');
redColor.addEventListener ('click', () => {colorMode = 'active';
                                            rainbowMode = 'inactive';
                                            updateColor('red');});

let rainbowBtn = document.querySelector ('#rainbow');
rainbowBtn.addEventListener ('click', () => {rainbowMode = 'active';
                                            colorMode = 'inactive';
                                            updateColor(rainbow());});

let startSketch = document.querySelector ('#start-sketch');
startSketch.addEventListener ('click', () => {generateGrid();})

function updateColor(color) 
{
    drawingColor = color  
}

function generateGrid(unitsNum = prompt ('Choose the resolution of your sketchpad')) 
{
    sketchpad.setAttribute ('style', `grid-template-columns: repeat(${unitsNum}, 1fr)`,
                            `grid-template-rows: repeat(${unitsNum}, 1fr)`);

    for (let index = 0; index < unitsNum * unitsNum; index++) 
    {
        let gridUnit = document.createElement ('div');
        gridUnit.setAttribute ('class', 'drawing-grid');

        gridUnit.addEventListener ('mousedown', () => { mouseState = 'down'});
        gridUnit.addEventListener ('mouseup', () => {mouseState = 'up'});

        gridUnit.addEventListener ('mouseover', (e) => { 
            if (mouseState === 'down') {
            if (colorMode === 'active')
            {e.target.style.backgroundColor = `${drawingColor}`} else if (rainbowMode === 'active')
            {e.target.style.backgroundColor = rainbow()}}});

        sketchpad.appendChild (gridUnit);
    }         
    
}

function rainbow() 
{
    let randomRed = Math.floor(Math.random()*256);
    let randomGreen = Math.floor(Math.random()*256);
    let randomBlue = Math.floor(Math.random()*256);

    let rainbowC = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return rainbowC;
    
}


