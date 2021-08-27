function removeCookie (){
    document.querySelector('#cookiePolicy').remove();
}

function con2c (temp){
    return Math.round((temp-32)*(5/9));
}

function con2f (temp){
    return Math.round((9/5)*temp + 32);
}

function convertTemps(element){
    for (var i = 1; i < 9; i++){
        var tempSelect = document.querySelector('#temp' + i);
        var tempVal = parseInt(tempSelect.innerText);
        if (element.value == 'Fahrenheit'){
            tempSelect.innerText = con2f(tempVal);
        }
            else {
                tempSelect.innerText = con2c(tempVal);
            }
    }
}
    