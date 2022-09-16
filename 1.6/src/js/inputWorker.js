
let inputX = document.querySelector('#inputX')
let elementsX = inputX.querySelectorAll('button')
elementsX.forEach(element => {
    element.onclick = selectX;
});
function selectX(){
    let elementsXSelected = inputX.querySelectorAll(".selected")
    elementsXSelected.forEach(element => {
        element.classList.remove("selected");
    });
    this.classList.toggle("selected");
}

let inputY = document.querySelector('#inputY')
let elementY = inputY.querySelector('input')
// elementY.oninput = regInput;
// elementY.onblur = regBlur;
elementY.oninput = regInputExp;
elementY.onblur = regBlurExp;

let reset = document.querySelector('#reset');
reset.onclick = resetForm;

function resetForm() {
    let elementsXSelected = inputX.querySelectorAll(".selected")
    elementsXSelected.forEach(element => {
        element.classList.remove("selected");
    });
    inputX.classList.remove('error')
    inputY.classList.remove('error')
    inputR.classList.remove('error')
}
