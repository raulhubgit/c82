var mouseEvent = "empty";
var lastPositionX,lastPositionY;
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

color = "space gray";
widthLine = 1;
radius = 2;


canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("color").value;
    widthLine = document.getElementById("linha").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";


}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = widthLine; 
        console.log("lastPositionX,lastPositionY = " );
        console.log("x= "+ lastPositionX + " y=" + lastPositionY );
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Cordenadas,Posicoes x e y = " );
        console.log("x= "+ PositionMouseX + " y=" + PositionMouseY );
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }
    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}
function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
