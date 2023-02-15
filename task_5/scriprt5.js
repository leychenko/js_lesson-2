

//================================= Задача 5 ====================================
// Задача 5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати..

const userCategoryDriveLicense = prompt("Введіть категорію водійського посвідчення \n A чи B чи C")
//  Змінна результату
let resultChoise

switch (userCategoryDriveLicense) {
	
	case "A": resultChoise = "<p class=red> Ваш транспортний засіб мотоцикл</p>"
	case "a": resultChoise = "<p class=red> Ваш транспортний засіб мотоцикл</p>"
		break;
	case "B": resultChoise = "<p class=red> Ваш транспортний засіб легковий автомобіль</p>"
	case "b": resultChoise = "<p class=red> Ваш транспортний засіб легковий автомобіль</p>"
	   break;
	case "C": resultChoise = "<p class=red> Ваш транспортний засіб вантажний автомобіль</p>"
	case "c": resultChoise = "<p class=red> Ваш транспортний засіб вантажний автомобіль</p>"
	   break;

	default:resultChoise = "<p class=red>Невірно введена категорія</p>"
		break;
}
document.write(`${resultChoise}`)








// document.write( `<table border=1>
//  <tr>
// 	<td>Кількість секунд:</td>
// 	<td> ${seconds}</td>
//  </tr>
//  <tr>
// 	<td>Кількість хвилин:</td>
// 	<td> ${minutes.toFixed(2)}</td>
//  </tr>
//  <tr>
//  	<td>Кількість годин:</td>
// 	 <td> ${hours.toFixed(2)}</td>
//  </tr>
//  </table>`)
