const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const mod = (num1, num2) => num1 % num2;

const averageOfTwo = (num1, num2) => (num1 + num2) / 2;

const averageOfThree = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const distance = (num1, num2) => Math.abs(num1 - num2);

const manhattanDistance = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1);
const euclideanDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);