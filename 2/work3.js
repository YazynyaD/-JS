let m = 4;
let v = -4;
const range = Math.abs(Math.max(m, v)-(Math.min(m, v)));
const Min = Math.min(m, v);
 
const FirstNumber = (Math.round(Math.random() * (range-2))) + Min;
const Result = FirstNumber + (FirstNumber % 2) + 1;
 
console.log(Result);
