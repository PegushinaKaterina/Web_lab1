function regInput(){
    let y = document.querySelector('#y');
    y.value = y.value.replace(/,/, '.');
    console.log(y.value);
    let reg = /([0-2]|-[0-4])(\.\d{0,10})|([0-2]|-[0-4]?)/
    let a = y.value.match(reg);
    if (a?.[0] !== y.value && y.value !== ''){
        y.classList.add('error2')
        setTimeout(removeClass, 100)
    }
    y.value = a?.[0] ?? '';
}

function regBlur(){
    let y = document.querySelector('#y');
    console.log(y.value);
    let reg = /([0-2]|-[0-4])(\.\d{1,10})|([0-2]|-[1-4])/
    let a = y.value.match(reg);
    console.log(a)
    if (a?.[0] !== y.value && y.value !== ''){
        y.classList.add('error2')
        setTimeout(removeClass, 100)
    }
    y.value = a?.[0] ?? y.value.slice(0,y.value.length-1);
}

function removeClass(){
    let y = document.querySelector('#y');
    y.classList.remove('error2');
}

function regInputExp(){
    let y = document.querySelector('#y');
    y.value = y.value.replace(/,/, '.');
    console.log(y.value);
    let reg = /(-?[-\d\.eE]{0,13})/
    let a = y.value.match(reg);
    if (a?.[0] !== y.value && y.value !== ''){
        y.classList.add('error2')
        setTimeout(removeClass, 100)
    }
    y.value = a?.[0] ?? '';
}

function regBlurExp(){
    let y = document.querySelector('#y');
    console.log(y.value);
    let a = Number(y.value);
    if(isNaN(a) || a <= -5 || a >= 3){
        y.classList.add('error2')
        setTimeout(removeClass, 100)
    }
}