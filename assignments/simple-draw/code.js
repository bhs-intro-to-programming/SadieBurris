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
  drawTriangle(x1, y1, x1 + wid, y1, x1 + wid / 2, y1 + wid * 7 / 16)
}


const sir = (x, y, wid, depth) => {
  autoTri(x, y, wid)
  if (depth > 0) {
    sir(x - wid / 4, y + wid * 7 / 32, wid / 2, depth - 1)
    sir(x + wid / 4, y - wid * 7 / 32, wid / 2, depth - 1)
    sir(x + wid * 3 / 4, y + wid * 7 / 32, wid / 2, depth - 1)
  }
}

//sir(1/4 * width, 1/2 * height, width * 1/2, 10);

const add = (num1, num2, num3) => num1 + num2 * num3 / 3;
const sub = (num1, num2, num3) => num1 - num2 * num3 / 3;

const carp = (x, y, widX, widY, depth) => {
  drawFilledRect(x, y, widX, widY)
  if (depth > 0) {
    for (let exe = 0; exe <= 4; exe++) {
      for (let wiy = 0; wiy <= 4; wiy++) {
        if (exe === 3 || exe === 0 || wiy === 0 || wiy === 3) {
        } else {
          let opX = exe === 1 || exe === 4 ? add(x, widX, exe) : sub(x, widX, exe);
          let opY = wiy === 1 || wiy === 4 ? add(y, widY, wiy) : sub(y, widY, wiy);
          carp(opX, opY, widX / 3, widY / 3, depth - 1)
        }
      }
    }
  }
}

//carp(width / 3, height / 3, width / 3, height / 3, 4);

const reAdd1 = (num1, num2) => num1 + num2 * 1 / 3;
const reAdd2 = (num1, num2) => num1 + num2 * 4 / 3;
const reSub = (num1, num2) => num1 - num2 * 2 / 3;

const reCarp = (x, y, widX, widY, depth) => {
  drawFilledRect(x, y, widX, widY)
  if (depth > 0) {
    for (let exe = 0; exe < 3; exe++) {
      for (let wiy = 0; wiy < 3; wiy++) {
        let opX = exe === 0 ? reSub(x, widX) : opX = exe === 1 ? reAdd1(x, widX) : reAdd2(x, widX)
        let opY = wiy === 0 ? reSub(y, widY) : opY = wiy === 1 ? reAdd1(y, widY) : reAdd2(y, widY)
        carp(opX, opY, widX / 3, widY / 3, depth - 1)
      }
    }
  }
}


reCarp(width / 3, height / 3, width / 3, height / 3, 4);

//1 124, 2 124, 4 124

/*
  carp(x + widX * 1/3, y - widY * 2/3, widX / 3, widY / 3, depth - 1)
  carp(x + widX * 4/3, y - widY * 2/3, widX / 3, widY / 3, depth - 1)
  carp(x + widX * 4/3, y + widY * 1/3, widX / 3, widY / 3, depth - 1)
  carp(x + widX * 4/3, y + widY * 4/3, widX / 3, widY / 3, depth - 1)
  carp(x + widX * 1/3, y + widY * 4/3, widX / 3, widY / 3, depth - 1)
  carp(x - widX * 2/3, y + widY * 4/3, widX / 3, widY / 3, depth - 1)
  carp(x - widX * 2/3, y + widY * 1/3, widX / 3, widY / 3, depth - 1)
  carp(x - widX * 2/3, y - widY * 2/3, widX / 3, widY / 3, depth - 1)
*/