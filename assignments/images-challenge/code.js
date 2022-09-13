/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */
/*
const drawLineCircle = (r) => {
  for(let i = 0; r * 2 * i < width; i++) {
    drawFilledCircle(r * 2 * i, 200, r, 'red');
  }
}

drawLineCircle(10);
*/

const drawTarget = (numRing) => {
  for(let i = 0; i < numRing; i++) {
    let color;
    if(i % 2 === 1) {
     color = 'red';
    } else {
      color = 'blue';
    }
    drawCircle(width/2, height/2, (width / 2) / numRing * i, color, lineWidth=1); 
  }
}

drawTarget(12);