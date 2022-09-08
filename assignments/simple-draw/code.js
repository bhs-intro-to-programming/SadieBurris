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

drawTriangle(width/2, 0, 0, height, width, height);
drawTriangle(width/4, height/2, width * 3/4, height / 2, width/2, height);