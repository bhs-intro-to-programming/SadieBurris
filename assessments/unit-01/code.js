// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (totalWeight, numItems) => totalWeight/numItems;
const hypotenuse = (x, y) => Math.sqrt(x ** 2 + y ** 2);
const maxRadius = (x, y) => Math.min(x/2, y/2);
const numCircles = (r, wid) => wid % (r * 2);
const offset = (screen, object) => (screen - object) / 2;
const canSleepIn = (weekday, vacation) => !weekday || vacation;
const canGoToProm = (senior, invitedBySenior, promNoGo) => senior || invitedBySenior && !promNoGo;