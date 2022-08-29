// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.

/*
// This is a function that we define to make it easier to draw a triangle. You
// may want to experiment with writing your own functions using this one as a
// model to draw other shapes.
const drawTriangle = (x1, y1, x2, y2, x3, y3, color, width = 1) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawLine(x2, y2, x3, y3, color, width);
  drawLine(x3, y3, x1, y1, color, width);
};

// This draws a falling trangle of a particular shape whose bottom point is
// positioned at x and whose y is a function of time.
const drawFallingTriangle = (x, time) => {
  // Figure out the x values relative to the passed in x
  let x1 = x - 50;
  let x2 = x;
  let x3 = x + 50;

  // Figure out the y values as a function of time.
  let y1 = (time / 4) % height;
  let y2 = y1 + 37;
  let y3 = y1 - 13;

  // Actually draw the triangle.
  drawTriangle(x1, y1, x2, y2, x3, y3, 'pink', 3);
};
*/

// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)

//HOW TO DEFINE FUNCTION
//const drawTriangle = (x1, y1, x2, y2, x3, y3, color, width = 1) => {


//Me code thingy :)


let x = Math.random();
let start = now();
//let x = 100;

const drawMovingThing = () => {
    let y = ((now() - start)/3) % height;
    let currentX = x + ((now() - start)/5) % width;
    clear();
    drawFilledRect(0, 0, 500, 500, 'blue');
    drawFilledCircle(currentX, y, 5, 'white');
    if (currentX >= width || y >= height) {
        x = Math.random() * width;
        start = now();
    };
};

animate(drawMovingThing);
animate(drawMovingThing);


