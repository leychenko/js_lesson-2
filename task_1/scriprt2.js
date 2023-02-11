

//================================= Задача 1 ====================================
// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

let number = parseFloat(prompt("Введить дійсне число"))
let numberTwo = parseFloat(prompt("Введить друге дійсне число")) 

const sum1 = number + numberTwo
const sum2 = number * numberTwo
const sum3 = number % numberTwo


document.write(
`<table border=2px>
<tr>
<td>Сума:</td>
<td>${sum1.toFixed(2)}</td>
</tr>
<tr>
	<td>Добуток:</td>
	<td>${sum2.toFixed(2)}</td>
</tr>
<tr>
	<td>Частка:</td>
	<td>${sum3.toFixed(2)}</td>
</tr>
</table>`
)