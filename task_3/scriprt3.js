

//================================= Задача 3 ====================================


// Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

let count = 0

const minNumber = 1
const maxNumber = 2

let rundomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)



if(count < 2){
	let userValue = parseInt(prompt("Введіть Ваше число від 1 - 5","1"))
	if(userValue === rundomNumber)
		document.write(`<p>Ви вгадали</p>`)
		else if(userValue !== rundomNumber){
			let userValue2 = parseInt(prompt("Введіть Ваше число від 1 - 5 ще раз","1"))
			count++
			if(userValue2 === rundomNumber){
			document.write(`<p>Ви вгадали</p>`)
			}
			else{
				document.write(`<p class=red >Нажаль ви програли</p>`)
			}
		}
}		



// document.write(`<table border=2px>
// <tr>
// <td>Загальна вартість<br> товару:</td>
// <td>${sumProducts}</td>
// </tr>
// <tr>
// 	<td>ПДВ:</td>
// 	<td>${taxSumProducts}</td>
// </tr>
// </table>`)