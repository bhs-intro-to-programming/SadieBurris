// Change these to change the physics of our world.
let bounce = 0.7;
let gravity = 0.001;
let ballSize = 15;

const drawFrame = (time) => {
   drawBall(time, ballSize)
};


// Call the animate function from the framework.
animate(drawFrame);
