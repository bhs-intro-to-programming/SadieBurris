/*
 * This code is running in an environment with five functions defined:
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *    Draws a line from x1,y1 to x2,y2 using the give color. The fifth argument,
 *    lineWidth, is optional and defaults to 1.
 *
 *  drawCircle(x, y, r, color, lineWidth=1)
 *
 *    Draws a circle centered at x,y with radius r using the given color. The
 *    fith argument, lineWidth, is optional and defaults to 1.
 *
 *  drawRect(x, y, width, height, color, lineWidth=1)
 *
 *    Draws a rectangle starting at x,y with the given width, height, and color.
 *    Positive widths go to the right and negative to the left; positive heights
 *    go down and negative heights go up. The sixth argument, lineWidth, is
 *    optional and defaults to 1.
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *    Draws a filled rectangle starting at x,y with the given width, height, and
 *    color. Positive widths go to the right and negative to the left; positive
 *    heights go down and negative heights go up.
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *    Draws a filled circle centered at x,y with radius r using the given color.
 *
 * There are also a couple variables that might be useful:
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 */

//drawLine(0, 0, width, height, 'red')

//drawCircle(width/2, height/2, 10, 'blue');

//drawRect(50, 50, 60, 40, 'black');

//drawFilledCircle(width - 50, height - 50, 50, 'red');

//sky
drawFilledRect(0, 0, 500, 600, 'blue');

//ground
drawFilledRect(0, 480, 500, 200, 'green');

//sun
const sunX = 400
const sunY = 100
drawFilledCircle(sunX, sunY, 50, 'yellow');

//cloud
const cloudX = sunX - 70;
const cloudY = sunY + 20;
drawFilledCircle(cloudX, cloudY, 30, 'white');
drawFilledCircle(cloudX + 30, cloudY + 10, 20, 'white');
drawFilledCircle(cloudX - 30, cloudY + 10, 20, 'white');

//moon
const moonX = 100;
const moonY = 100;
drawFilledCircle(moonX, moonY, 50, 'white');
drawFilledCircle(moonX + 20, moonY, 50, 'blue');

drawFilledRect(150, 350, 200, 200, 'brown')
drawLine(200, 300, 300, 400, 'brown', 150);
drawLine(150, 350, 350, 350, 'black', 1)
drawFilledRect(275, 460, 50, 90, 'black');
drawFilledRect(175, 390, 50, 50, 'blue');
drawFilledRect(275, 390, 50, 50, 'blue');
drawFilledCircle(285, 500, 5, 'gray');