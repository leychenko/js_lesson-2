

//=================================Задача 7====================================
// Задача 7.З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

const numberMonth = parseInt(prompt("Введіть номер місяця"))
const months = 12

if ( numberMonth <= 2 || numberMonth == months)
	document.write(`<p class=red>Це зима</p>`)
	else if(numberMonth <= 5)
		document.write(`<p class=red>Це весна</p>`)
		else if(numberMonth <= 8)
		document.write(`<p class=red>Це літо</p>`)
			else if(numberMonth <= 11)
			document.write(`<p class=red>Це осінь</p>`)
			else
			document.write(`<p class=red>Такого місяця не існує</p>`)



