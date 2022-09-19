/*
//sky
drawFilledRect(0, 0, 500, 600, 'blue');

//ground
drawFilledRect(0, 480, 500, 200, 'green');

//sun
const sunX = 400;
const sunY = 100;
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


const houseX = 150;
//why would you want to change house Y?????
drawFilledRect(houseX, 350, 200, 200, 'brown')
drawLine(houseX + 50, 300, houseX + 150, 400, 'brown', 150);
drawLine(houseX, 350, houseX + 200, 350, 'black', 1)
drawFilledRect(houseX + 125, 460, 50, 90, 'black');
drawFilledRect(houseX + 25, 390, 50, 50, 'blue');
drawFilledRect(houseX + 125, 390, 50, 50, 'blue');
drawFilledCircle(houseX + 135, 500, 5, 'gray');

*/
/*
drawTriangle(width/2, 0, 0, height, width, height);
drawTriangle(width/4, height/2, width * 3/4, height / 2, width/2, height);
drawTriangle(width * 3/8, height/4, width * 5/8, height/4, width/2, height/2);
drawTriangle(width * 1/8, height * 3/4, width * 3/8, height * 3/4, width/4, height);
drawTriangle(width * 5/8, height * 3/4, width * 7/8, height * 3/4, width * 3/4, height);
drawTriangle(width * 7/16, height * 1/8, width * 9/16, height * 1/8, width / 2, height/4);
drawTriangle(width * 5/16, height * 3/8, width * 7/16, height * 3/8, width * 3/8, height / 2);
drawTriangle(width * 9/16, height * 3/8, width * 11/16, height * 3/8, width * 5/8, height / 2);
drawTriangle(width * 3/16, height * 5/8, width * 5/16, height * 5/8, width * 1/4, height * 3/4);
drawTriangle(width * 1/16, height * 7/8, width * 3/16, height * 7/8, width * 1/8, height);
drawTriangle(width * 5/16, height * 7/8, width * 7/16, height * 7/8, width * 3/8, height);
drawTriangle(width * 11/16, height * 5/8, width * 13/16, height * 5/8, width * 3/4, height * 3/4);
drawTriangle(width * 9/16, height * 7/8, width * 11/16, height * 7/8, width * 5/8, height);
drawTriangle(width * 13/16, height * 7/8, width * 15/16, height * 7/8, width * 7/8, height);
drawTriangle(width * 15/32, height * 1/16, width * 17/32, height * 1/16, width * 1/2, height * 1/8);
drawTriangle(width * 13/32, height * 3/16, width * 15/32, height * 3/16, width * 7/16, height * 1/4);
drawTriangle(width * 17/32, height * 3/16, width * 19/32, height * 3/16, width * 9/16, height * 1/4);
*/

const autoTri = (x1, y1, wid) => {
  drawTriangle(x1, y1, x1 + wid, y1, x1 + wid / 2, y1 + wid * 6 / 5)
}

drawTriangle(width / 2, 0, 0, height, width, height);
/*
autoTri(width * 1 / 4, height * 1 / 2, width * 1 / 2)
autoTri(width * 3 / 8, height * 1 / 4, width * 1 / 4);
autoTri(width * 7 / 16, height * 1 / 8, width * 1 / 8);


const sirUp = (depth) => {
  for (let i = 1; i < depth; i++) {
    autoTri(width / 2 * ((2 ** i - 1) / (2 ** i)), height * 1 / (2 ** i), width * 1 / (2 ** i))
    autoTri(width / 2 * (1 / (2 ** i)), height * (2 ** i - 1)/ (2 ** i), width * 1 / (2 ** i))
    autoTri(width / 2 * (1 / (2 ** i)), height * (2 ** i - 1)/ (2 ** i), width * 1 / (2 ** i))
    
  }
}

sirUp(20);
*/

const drawSir = (x, y, wid) => {
  let x = width * 1/4;
  let y = height * 1/2;
  let wid = width * 1/2;
  autoTri(x, y, wid);
}

