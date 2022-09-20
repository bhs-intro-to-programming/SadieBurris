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

const drawLineCircle = (r) => {
  for(let i = 0; r * 2 * i + r < width - r; i++) {
    drawFilledCircle(r * 2 * i + r, height / 2, r, 'red');
  }
}

//drawLineCircle(11);


const alterLineCircle = (r) => {
  for(let i = 0; r * 2 * i + r < width; i++) {
    let color = i % 2 === 0 ? 'blue' : 'red';
    drawFilledCircle(r * 2 * i + r, 200, r, color);
  }
}

//alterLineCircle(10);


const drawTarget = (numRing) => {
  for (let i = 0; i < numRing; i++) {
    let color = i % 2 === 0 ? 'blue' : 'red';
    drawFilledCircle(width / 2, height / 2, ((numRing - i) / numRing) * (width / 2), color);
  }
}

//drawTarget(12);


const drawCheckers = (edgeNum) => {
  var checkWidth = Math.min(width, height);
  var sqrWidth = checkWidth / edgeNum;
  var color;
  for (let i = 0; i < edgeNum; i++) {
    for (let j = 0; j < edgeNum + 1; j++) {
      if (i % 2 === 1 && j % 2 === 1) {
        color = 'red';
      } else if (i % 2 === 1 && j % 2 === 0) {
        color = 'blue';
      } else if (i % 2 === 0 && j % 2 === 1) {
        color = 'blue';
      } else {
        color = 'red';
      }
      drawFilledRect(j * sqrWidth, i * sqrWidth, sqrWidth, sqrWidth, color);
    }
  }
}

//drawCheckers(10);


const drawLineyCurve = (numLines) => {
  const heightDist = height / numLines;
  const widthDist = width / numLines;
  for (let i = 0; i < numLines; i++) {
    
    drawLine(0, heightDist * i, widthDist * i, height, 'blue', 1);
  }
}

//drawLineyCurve(150);


const drawRectCircle = (r) => {
  const d = 2 * r
  for(let i = 0; d * i < width; i++) {
    for(let j = 0; d * j < height; j++)
    drawCircle(d * i, d * j, r, 'red', 1);
  }
}

//drawRectCircle(20);


const drawRanCircle = (r, prob) => {
  const d = r * 2
  for (let i = 0; d * i < width; i++) {
    for (let j = 0; d * j < height; j++) {
      if (Math.random() > prob) {
        drawCircle(d * i, d * j, r, 'red', 1);
      } else {
        drawFilledCircle(d * i, d * j, r, 'red');
      }
    }
  }
}

//drawRanCircle(10, 0.1);


const drawSqrCrc = (r) => {
  var checkLength = Math.min(width, height) - 1 * (r * 2);
  for(let i = 0; r * 2 * i < checkLength; i++) {
    drawCircle(r * 2 * i + r * 2, height / 2 - checkLength / 2, r, 'red', 1);
    drawCircle(r * 2 * i + r * 2, height / 2 + checkLength / 2, r, 'red', 1);
    drawCircle(width / 2 + checkLength / 2, r * 2 * i + 70, r, 'red', 1);
    drawCircle(width / 2 - checkLength / 2 + 20, r * 2 * i + 70, r, 'red', 1);
  }
}

drawSqrCrc(20);
