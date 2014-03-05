window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function( callback ){
      return window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame          ||
    window.webkitCancelRequestAnimationFrame    ||
    window.mozCancelRequestAnimationFrame       ||
    window.oCancelRequestAnimationFrame     ||
    window.msCancelRequestAnimationFrame        ||
    clearTimeout
} )();

// Initialize canvas and required variables
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"), // Create canvas context
    W = window.innerWidth, // Window's width
    H = window.innerHeight, // Window's height
    particles = [], // Array containing particles
    ball = {}, // Ball object
    paddles = [2], // Array containing two paddles
    mouse = {}, // Mouse object to store it's current position
    points = 0, // Varialbe to store points
    fps = 60, // Max FPS (frames per second)
    particlesCount = 20, // Number of sparks when ball strikes the paddle
    flag = 0, // Flag variable which is changed on collision
    particlePos = {}, // Object to contain the position of collision
    multipler = 1, // Varialbe to control the direction of sparks
    startBtn = {}, // Start button object
    restartBtn = {}, // Restart button object
    over = 0, // flag varialbe, cahnged when the game is over
    init, // variable to initialize animation
    paddleHit;

// Add mousemove and mousedown events to the canvas
canvas.addEventListener("mousemove", trackPosition, true);
canvas.addEventListener("mousedown", btnClick, true);

// Initialise the collision sound
collision = document.getElementById("collide");

// Set the canvas's height and width to full screen
canvas.width = W;
canvas.height = H;

// Function to paint canvas
function paintCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H);
}

