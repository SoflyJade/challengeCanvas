var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

ctx.beginPath();

// cercle
ctx.arc(200,200,150,0,2*Math.PI);
ctx.strokeStyle="rgb(0, 161, 208)"; //ligne bleu
ctx.lineWidth = 25;

// carré 1
ctx.fillStyle = "rgb(0, 161, 208)";
ctx.fillRect(173,125,55,55);

// carré 2
ctx.fillStyle = "rgb(53, 99, 186)";
ctx.fillRect(173,225,55,55);


ctx.stroke();
