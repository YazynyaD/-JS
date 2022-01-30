const roadMines = [true, false, false, false, false, false, false, false, false, true];
let live = 2;

 
for (let i = 0; i < roadMines.length; ++i) {
  let position = i + 1;
  if (roadMines[i] === true && live > 1) {
    live -= 1;
    console.log('Танк повреждён');
    continue;
  }
  else if (roadMines[i] === true && live > 0) {
    live -= 1;
    console.log('Танк уничтожен')
    break;
  }
  console.log(`Танк переместился на ${position}`);
}