const table = document.querySelector('.table');

function addRow(data) {
    table.innerHTML += data;
}

function cleanTable() {
    console.log(1);
    let elementsTable = table.querySelectorAll(".table-row:not(.table-header-group)");
    console.log(elementsTable);
    elementsTable.forEach(element => {
        console.log(element);
        element.remove();
    });
    requestCleanTable();
}

function getTable() {
    table.innerHTML += requestGetTable();
}

let element = document.querySelector('#cleanTable')
element.onclick = cleanTable;


