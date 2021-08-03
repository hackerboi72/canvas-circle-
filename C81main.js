var canvas1 = document.getElementById("canvas"); 
var draw = canvas1.getContext('2d')
var color = (Green)
draw.beginPath() 
draw.strokeStyle = color 
draw.lineWidth = 2
draw.arc(200, 200, 40, 0, 2*Math.PI)
draw.stroke()


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;

    mouse_x = e.clientX - canvas.offsetLeft
    mouse_y = e.clientY - canvas.offsetTop

    circle(mouse_x, mouse_y)
}
function circle(x, y) {
    draw.beginPath() 
draw.strokeStyle = color 
draw.lineWidth = 2
    draw.arc(x, y, 40, 0, 2*Math.PI)
draw.stroke()
}