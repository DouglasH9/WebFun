// Array Challenges

// Challenge 1. Always Hungry
// var arr1 = [3.14, 'food', 'pie', true, 'food'];
// var arr2 = [1,2,3,4];
// function alwaysHungry (arr){
//     var num = 0;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] == 'food'){
//             console.log('yummy');
//         }
//         else if (arr[i] !== 'food'){
//             num++;
//         }
//     }
//     if (num == arr.length){
//         console.log ("I'm hungry");
//     }
// }

// alwaysHungry(arr1);
// alwaysHungry(arr2);

// Challenge 2. High Pass Filter

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     // your code here
//     for (var i = 0; i<arr.length; i++){
//         if (arr[i] > cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// Challenge 3. Better than average

// var sum = 0;
// var avg = 0;
// var count = 0;
// function betterThanAverage(arr) {
//     // calculate the average
//     for (var i = 0; i< arr.length; i++){
//         sum += arr[i];
//     }
//     avg = sum/arr.length;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > avg){
//             count++;
//         }
//     }
//     return count;
// }

// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


// Challenge 4. Array reverse

// var temp = []; universal variable not needed;


// function reverse(arr) {
//     for (var left = 0; Math.floor(left < arr.length/2); left++){
//         var right = arr.length - 1 - left;
//         var temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         console.log('loopnumber' + left + ' ' + arr);
//     }
//     // your code here
//     return arr;
// }

// var result = reverse(["a", "b", "dangus", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Challenge 5. Fibonacci Array

// var arr =[];
function fibonacciArr(n){
    var arr = [0,1];
    // var num = 0;
        for (var i = 0; i <= n; i++){
            arr.push(arr[arr.length - 1]+arr[arr.length - 2]);
        }
    return arr;
}
var result =  fibonacciArr(5);
console.log(result);