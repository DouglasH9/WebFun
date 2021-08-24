console.log("page loaded...");

var janeName = 
document.querySelector('#jane');

function changeName(){
    console.log(janeName);
    janeName.innerHTML = "Ghost Bird";
}
var userReq = document.querySelector('li.card-list-item');
var conCount = document.querySelector('#connections');



// function conReqCount (){
//     console.log(conCountNum);
//     conCount.innerText = conCountNum - 1;
//     conCountNum--;
//     return conCount;
// }

function removeUser (){
    // console.log(userReq);
    // console.log('wut up');
    userReq.remove();
    userReq = document.querySelector('li.card-list-item');
    document.querySelector('#connections').innerHTML--;
    return userReq;
}

function acceptReq (){
    document.querySelector('#yourConnex').innerHTML++;
}