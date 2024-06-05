let userNum = +prompt(`Enter your num`, 12345);
const firstNum = Math.floor(userNum / 10000) % 10;
const secondNum = Math.floor(userNum / 1000) % 10;
const thirdNum = Math.floor(userNum / 100) % 10;
const fourthNum = Math.floor(userNum / 10) % 10;
const fifthNum = Math.floor(userNum % 10);
console.log(`${firstNum} ${secondNum} ${thirdNum} ${fourthNum} ${fifthNum}`);
