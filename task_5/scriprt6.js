

//================================= Задача 5 ====================================
// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

let seconds = parseInt(prompt("Введить секунди"))

const minutes = seconds / 60
const hours = minutes / 60
 

document.write( `<table border=1>
 <tr>
	<td>Кількість секунд:</td>
	<td> ${seconds}</td>
 </tr>
 <tr>
	<td>Кількість хвилин:</td>
	<td> ${minutes.toFixed(2)}</td>
 </tr>
 <tr>
 	<td>Кількість годин:</td>
	 <td> ${hours.toFixed(2)}</td>
 </tr>
 </table>`)
