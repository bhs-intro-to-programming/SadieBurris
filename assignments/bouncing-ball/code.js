// Change these to change the physics of our world.
let bounce = 0.7;
let gravity = 0.001;
let ballSize = 15;
let start = now()

const drawFrame = (time) => {
   drawBall(time/15, ballSize)
    if (now() - start/15 <= 100) {
      start = now();
    }
};


// Call the animate function from the framework.
animate(drawFrame);
