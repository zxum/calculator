const displayBar = document.querySelector('#displaybar');

const clearAll = document.querySelector('#clear-all').addEventListener('click', deleteAll);

const deleteBtn = document.querySelector('#deletebtn').addEventListener('click', deletePrev);

const gridItems = document.querySelectorAll('.calcbtn');
for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('click', showInDisplay);
}


const equalBtn = document.querySelector('#equal').addEventListener('click', equals);


function equals(e) {
    //console.log(e);
    let str = displayBar.textContent;
    let parsed = (new Function('return ' + str)());
    displayBar.textContent = parsed;
}

function deleteAll(e) {
    displayBar.textContent = "";
}

function deletePrev(e) {
    let var1 = displayBar.textContent
    let var2 = var1.toString().slice(0, -1)
    displayBar.textContent = var2;
}

function showInDisplay(e) {
    displayBar.textContent += e.target.innerText;
}