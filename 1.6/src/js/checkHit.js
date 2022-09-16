function checkHit(){
    let xValue = document.querySelector("[name='x'].selected")?.value;
    let yValue = document.querySelector('#y').value;
    let rValue = document.querySelector("[name='r']:checked")?.value;
    const date = new Date();
    const offset = date.getTimezoneOffset();
    let r_args = {'x': xValue, 'y' : yValue, 'r': rValue, 'utc': offset};
    if(validate(xValue, yValue, rValue)){
        requestCheckHit(r_args)
        moveCircle(parseInt(xValue), parseFloat(yValue), parseFloat(rValue))
    } else {
        alert("Проверьте корректность введенных значений")
    }
}

function moveCircle(xValue, yValue, rValue) {
    let circle = document.querySelector("#circle");
    circle.setAttribute("cx",150 + xValue * 100 / rValue);
    circle.setAttribute("cy",150 - yValue * 100 / rValue);
}