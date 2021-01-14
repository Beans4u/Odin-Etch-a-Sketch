
const container = document.getElementById('container');
const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
container.appendChild(gridContainer);

// const mosaic = document.createElement('div');
// mosaic.setAttribute('id', 'mosaic');
// container.appendChild(mosaic);

for (let i = 1; i < 17; i++){
    for (let j = 1; j < 17; j++){
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', `div-${i}-${j}`);
        newDiv.setAttribute('class', `new-div`);
        gridContainer.appendChild(newDiv);
    }
}

