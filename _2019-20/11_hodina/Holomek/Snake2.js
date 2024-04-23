
function had(){
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0,100,100);
}

window.addEventListener("keydown", moveSomething, false);
  
var deltaX = 0;
var deltaY = 0;
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            deltaX -= 2;
            break;
        case 38:
            deltaY -= 2;
            break;
        case 39:
            deltaX += 2;
            break;
        case 40:
            deltaY += 2;
            break;  
    }  
    had(); 
}

