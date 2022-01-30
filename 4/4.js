let days = [];

for (let i = 1; i < 32; i++) {
  days.push(i);
}

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',];
 
let firstWeekDay = "Среда";
let indexWeek = week.indexOf(firstWeekDay);

for (let i = 0; i < week.length; i++) {
  if (week[i] === firstWeekDay ) {
      indexWeek = i;
  }
}
 
for (let day of days) {
  const x = (indexWeek + day - 1) % 7;
  console.log(`${day} января, ${week[x]}`);
}