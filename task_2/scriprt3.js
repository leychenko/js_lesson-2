

//=================================Задача 0====================================
// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

let birthYear = parseInt(prompt("Введить рік народження"))
let today = new Date(); 
let year = today.getFullYear(); 
const calc = year - birthYear

document.write(`<p>Результат:</p><p>Вам ${calc} років</p>`)
