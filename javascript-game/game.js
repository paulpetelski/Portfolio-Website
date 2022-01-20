const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

//var dx = 2;
//var dy = -1;
var dx = 2;
var dy = -2; 

var ballRadius = 6;

//const interval = setInterval(draw,10);

function drawBall(){
  ctx.beginPath();
  // make a small blue circle
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw () {
  // clear canvas each loop --- delete to create a trail
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // draw the ball
  drawBall();
  // create boundaries
  // top and bottom
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
    dy = -dy
  }
  // left and right
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
    dx = -dx;
  }
  // create movement by increasing x and y
  x += dx;
  y += dy;

}

// start stop buttons
var interval;
function start(){
  stop();
  interval = setInterval(draw, 5);
}
function stop(){
  if (interval) clearInterval(interval);
  interval = null;
}

