

//================================= Задача 6 ====================================
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.розмітки
const numberDay = parseInt(prompt("Введіть номер дня тижня"))
let nameDay

switch (numberDay) {
	case 1: nameDay = "<p class=red>Понеділок</p>"
		break;
	case 2: nameDay = "<p class=red>Вівторок</p>"
		break;
	case 3: nameDay = "<p class=red>Середа</p>"
		break;
	case 4: nameDay = "<p class=red>Четверг</p>"
		break;
	case 5: nameDay = "<p class=red>П'ятниця</p>"
		break;
	case 6: nameDay = "<p class=red>Субота</p>"
		break;
	case 7: nameDay = "<p class=red>Неділя</p>"
		break;

	default: nameDay = "<p class=red>Такого дня тижня не існує</p>"
		break;
}
document.write(`${nameDay}`)

// document.write(`
// <table>
// <tr>
//   <th colspan=2>Чек</th>
//   <th></th>
//   <th></th>
// </tr>
//  <tr>
//   <td>Bартість товару A</td>
//   <td colspan=2>${resultProductA.toFixed(2)}</td>
//  </tr>
//  <tr>
// 	<td>Кількість товару A</td>
// 	<td>${countProductA}</td>
//  </tr>
// <tr>
//   <td>Bартість товару B</td>
//   <td colspan=2> ${resultProductB.toFixed(2)}</td>
// </tr>
// <tr>
// <td>Кількість товару B</td>
// <td>${countProductB}</td>
// </tr>
// <tr>
//   <td>Bартість товару C</td>
//   <td colspan=2> ${resultProductC.toFixed(2)}</td>
// </tr>
// <tr>
// <td>Кількість товару C</td>
// <td>${countProductC}</td>
// </tr>
// <tr>
//   <td>Всого:</td>
//   <td colspan=2>${total.toFixed(2)}</td>
// </tr>
// <tr>
//   <td>ПДВ:</td>
//   <td colspan=2>${tax.toFixed(2)}</td>
// </tr>
// <tr>
// <td>Кількість всіх товарів</td>
// <td>${totalProduct}</td>
// </tr>
// </table>
// `)