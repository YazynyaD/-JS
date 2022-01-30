let a = [];
let count = 10;
let m = 10;
let n = 100;

let min = Math.max(n , m)
let max = Math.max(n , m)


for ( let i = m; i < count + m; ++i ) {
    a.push( Math.floor(Math.random() * (max - min + 1) + min) );
}

console.log(min);