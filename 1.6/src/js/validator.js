function validate(xValue, yValue, rValue){
    let xValueIsCorrect =  xValue!== undefined;
    let yValueIsCorrect = yValueValidate(yValue);
    let rValueIsCorrect =  rValue !== undefined;
    let XYRIsCorrect = xValueIsCorrect && yValueIsCorrect && rValueIsCorrect;
    if (xValueIsCorrect){
        inputX.classList.remove('error')
    } else {
        inputX.classList.add('error')
    }
    if (yValueIsCorrect){
        inputY.classList.remove('error')
    } else {
        inputY.classList.add('error')
    }
    if (rValueIsCorrect){
        inputR.classList.remove('error')
    } else {
        inputR.classList.add('error')
    }
    console.log(xValueIsCorrect + ' ' + yValueIsCorrect + ' ' + rValueIsCorrect + ' ' + "not null = " + XYRIsCorrect)
    return XYRIsCorrect;

    function yValueValidate(y) {
        let yParsed = Number(y);
        return y !== '' && !isNaN(yParsed) && yParsed > -5 && yParsed < 3;
    }
}