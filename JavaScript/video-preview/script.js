console.log("page loaded...");
function vidHover (element){
    element.muted = true;
    element.play();
}
function vidOut (element){
    element.muted = false;
    element.pause();
}