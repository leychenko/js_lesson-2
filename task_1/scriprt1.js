

//================================= Задача 1 ====================================
// Задача 1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

const firsChild = prompt("Введіть ім'я першої дитини")
const candyForFirstChild = parseInt(prompt("Введіть кількість цукерок для першої дитини"))
const secondChild = prompt("Введіть ім'я другої дитини") 
const candyForSecondtChild = parseInt(prompt("Введіть кількість цукерок для другої дитини"))


if(candyForFirstChild < candyForSecondtChild)
	document.write(`
	 <p>Ім'я дитини у якій більше цукерок:</p>
	 <p>${secondChild}</p>`)
	else if(candyForFirstChild > candyForSecondtChild)
	document.write(`
	<p>Ім'я дитини у якій більше цукерок:</p>
	<p>${firsChild}</p>`)
	else 
	document.write(`<p>У дітей порівну цукерок</p>`)