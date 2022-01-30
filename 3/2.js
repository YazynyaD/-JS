let Name = 'КриСтина'
const func = (word) =>  word.substring(0,1).toUpperCase() + word.substring(1);
const newstr = Name.replace(/([^\s]+)/g, func);
const func1 = (word1) => word1.substring(0,1) + word1.substring(1).toLowerCase();
const newName = newstr.replace(/([^\s]+)/g, func1)

const surName = ' Алексеева'
const newstr1 = surName.replace(/([^\s]+)/g, func);
const newSurName = newstr1.replace(/([^\s]+)/g, func1)

const NameConsole = Name === newName ? 'Имя осталось без изменений' : 'Имя было преобразовано';

const surNameConsole = surName === newSurName ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована';

console.log(NameConsole)
console.log(surNameConsole)

console.log(newName)