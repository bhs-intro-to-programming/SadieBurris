import { setCanvas, drawFilledCircle, clear, width, height, animate, now } from './graphics.js';
setCanvas(document.getElementById('screen'));
const locs = []

//Make 2d array of "sectors" so the computer only needs to check certian sectors for distance from currect boid. Sectors 
//have objects boids. Boids have individual location and direction. 

//Rules: Boid avoids close boids, boid flys in same direction as nearby boids, goes towards average of other close boids

const makeBoids = (num) => {
    for (let i = 0; i < num; i++) {
        locs.push({x: Math.random() * width, y: Math.random() * height, dir : Math.random() * 360})
    }
}

makeBoids(10)
