// myArr = [1,3,4,5,63,4,5,6,4521,6,4,5,66,453];
myArr = [1, 3, 4, 4, 2, 4];

//1
const maxValue = myArr.reduce((maxValue, currentValue) => {
  return currentValue > maxValue ? currentValue : maxValue;
});

//2
const sumEven = myArr.reduce((evenValue, currentValue) => {
  return currentValue % 2 == 0 ? evenValue + currentValue : evenValue;
}, 0);

//3
const averageValue = myArr.reduce((averageSum, currentValue, currentIndex) => {
  return (averageSum * currentIndex + currentValue) / (currentIndex + 1);
}, 0);

console.log(averageValue);
