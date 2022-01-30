//Первое задание
let x1 = 4;
let y1 = 3;

let x2 = 9;
let y2 = 11;

let a = Math.abs(x1-x2);
let b = Math.abs(y1-y2);

console.log (Math.abs(a*b))



//Второе задание
let c = 0.23875;
let d = 0.34825;
let n = 4;

let first = Math.round(c*Math.pow(10, n))
let second = Math.round(d*Math.pow(10, n))

console.log (first===second)
console.log (first>=second)
console.log (first<=second)
console.log (first>second)
console.log (first<second)
console.log (first!=second)


// Третье Задание
// let v = 0;
// let m = 100;

// let range = Math.abs(v-m)
// let numberinrange = Math.round(Math.random() * range / 2 + v)* 2 + 1
// let min = Math.min(v, m)

// console.log (min+numberinrange)
