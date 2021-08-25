function removeCookie (){
    document.querySelector('#cookiePolicy').remove();
}

// var highs = [75, 80, 69, 79];
// var lows = [65, 66, 61, 70]

// function convertTemps(){
//     if (document.querySelector('#cF').value == 'Fahrenheit'){
//         for (var i = 0; i < highs.length; i++){
//             highs[i] = (highs[i]-32 * 5/9);
//             document.querySelector('')
//         }
//     }
// }
function convertTemps(){
    document.querySelector('#cF').value == 'Fahrenheit';
    if (document.querySelector('option').value == 'Celsius'){
        document.querySelector('#red1').innerText() = '24°';
        document.querySelector('#blue1').innerHTML = '18°';
        document.querySelector('#red2').innerHTML = '27°';
        document.querySelector('#blue2').innerHTML = '19°';
        document.querySelector('#red3').innerHTML = '21°';
        document.querySelector('#blue3').innerHTML = '16°';
        document.querySelector('#red4').innerHTML = '26°';
        document.querySelector('#blue4').innerHTML = '21°';
    }
    else {
        document.querySelector('#red1').innerHTML = '75°';
        document.querySelector('#blue1').innerHTML = '65°';
        document.querySelector('#red2').innerHTML = '80°';
        document.querySelector('#blue2').innerHTML = '66°';
        document.querySelector('#red3').innerHTML = '69°';
        document.querySelector('#blue3').innerHTML = '61°';
        document.querySelector('#red4').innerHTML = '78°';
        document.querySelector('#blue4').innerHTML = '70°';
    }
}