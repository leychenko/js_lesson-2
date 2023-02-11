

//================================= Задача 4 ====================================
// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let userValue = parseFloat(prompt("Введить довжину у сантиметрах"))

const sumMetr = userValue / 100
const sunKilometer = sumMetr / 1000

document.write( `<table border=2px>
 <tr>
	<td>Довжина в см:</td>
	<td> ${userValue}</td>
 </tr>
 <tr>
	<td>Довжина в м:</td>
	<td> ${sumMetr}</td>
 </tr>
 <tr>
 	<td>Довжина в kм:</td>
	 <td> ${sunKilometer}</td>
 </tr>
 </table>`)
