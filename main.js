canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var lastPositonOfX, lastPositionOfY;
var color="black";
var width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    currentPositionX=e.clientX-canvas.offsetLeft;
    currentPositionY=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("Last position of X and Y = ");
        console.log("X= "+lastPositionOfX+" Y= "+lastPositionOfY);
        ctx.moveTo(lastPositionOfX,lastPositionOfY);
        console.log("Current position of X andY = ");
        console.log("X= "+currentPositionX+" Y= "+currentPositionY);
        ctx.lineTo(currentPositionX,currentPositionY);
        ctx.stroke();
    }
    lastPositionOfX=currentPositionX;
    lastPositionOfY=currentPositionY;

}
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}