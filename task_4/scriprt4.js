

//================================= Задача 4 ====================================
// Задача 4.З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером)

const userAge = parseInt(prompt("Введіть свій вік"))
let result;

// =============
// Варіант №1
// =============

switch(true)
{
	case (userAge < 7): result = `<p class=red>Ви дитина садочку</p>`;
		break
	case (userAge <= 16): result = (`<p class=red>Ви школяр</p>`);
		break
	case (userAge <= 25): result = `<p class=red>Ви студент</p>`;
		break
	case (userAge <= 60): result = `<p class=red>Ви працівник</p>`;
		break
	case (userAge <= 100): result = `<p class=red>Ви пенсіонер</p>`;
		break
	default:result = (`<p class=red>Не може бути</p>`)

}
document.write(`${result}`)

// =============
// Варіант №2
// =============

// if(userAge < 7)
// document.write(`Дитина садочку`)
// 	else if(userAge <= 16)
// 	document.write(`школяр`)
// 	else if(userAge <= 25)
// 	document.write(`студент`)
// 	else if(userAge <= 60)
// 	document.write(`працівник`)
// 	else if(userAge <= 100)
// 	document.write(`пенсіонер`)
// 	else
// 	document.write(`Не може бути`)














// document.write( `<table border=2px>
//  <tr>
// 	<td>Довжина в см:</td>
// 	<td> ${userValue}</td>
//  </tr>
//  <tr>
// 	<td>Довжина в м:</td>
// 	<td> ${sumMetr}</td>
//  </tr>
//  <tr>
//  	<td>Довжина в kм:</td>
// 	 <td> ${sunKilometer}</td>
//  </tr>
//  </table>`)
