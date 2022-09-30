// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (totalWeight, numItems) => totalWeight / numItems;
const hypotenuse = (x, y) => Math.sqrt(x ** 2 + y ** 2);
const maxRadius = (x, y) => Math.min(x / 2, y / 2);
const numCircles = (r, wid) => wid % (r * 2);
const offset = (screen, object) => (screen - object) / 2;
const canSleepIn = (weekday, vacation) => !weekday || vacation;
const canGoToProm = (senior, invitedBySenior, promNoGo) => senior && !promNoGo || invitedBySenior && !promNoGo;
const getsSpeedingTicket = (speed, grouch) => {
  if (grouch && speed > 65) {
    return true
  } else if (!grouch && speed > 70) {
    return true
  } else {
    return false
  }
}
const moreThanTwiceAsLong = (s, d) => s.length / 2 > d.length;
const aFartherThanB = (a, b, c) => Math.abs(c - a) > Math.abs(b - a);
const firstHalf = (s) => s.substring(0, Math.floor(s.length/2));
const secondHalf = (s) => s.substring(Math.floor(s.length/2));