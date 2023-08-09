canvas = document.getElementById("myCanvas");
color = "blue";
ctx = canvas.getContext("2d");
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(310, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(420, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 5;
ctx.arc(255, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(365, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(140, 143, 340, 173);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " , Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
function clear_canvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}