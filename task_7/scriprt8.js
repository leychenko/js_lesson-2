

//=================================Задача 7====================================
// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

let num1 = Math.floor(Math.random() * 11) + 1
let num2 = Math.floor(Math.random()* 6)
const resultNum = num1 + num2

document.write(`
<table border=2px>
<tr>
<td>Сума випадкового номера місяця:</td>
<td>${num1}</td>
</tr>
<tr>
	<td>Сума випадкового номера дня:</td>
	<td>${num2}</td>
</tr>
<tr>
	<td>Сума чисел:</td>
	<td>${resultNum}</td>
</tr>
</table>
`)